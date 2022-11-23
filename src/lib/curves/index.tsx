import React, { Component, useEffect, useRef, useState } from 'react'
import spline from 'cubic-spline'
import Draw from './draw'
import Apply from './apply'
import './index.scss'

const round = (num: number, dec = 2) => parseFloat(num.toFixed(dec))
const defaultCurves = {
  a: { xs: [0, 1], ys: [0, 1] },
  r: { xs: [0, 1], ys: [0, 1] },
  g: { xs: [0, 1], ys: [0, 1] },
  b: { xs: [0, 1], ys: [0, 1] }
}
export default ({
  currentChannel: _currentChannel,
  targetCanvas
}: {
  currentChannel: 'r' | 'g' | 'b' | 'a'
  targetCanvas: HTMLCanvasElement
}) => {
  const currentChannel = _currentChannel || 'a'
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const ctx = useRef<CanvasRenderingContext2D | null>(null)
  const [currentCurves, setCurrentCurves] = useState(defaultCurves)
  const [originalImageData, setOriginalImageData] = useState<ImageData | null>(
    null
  )
  let x,
    y,
    dragging: boolean,
    draggingPont: number,
    w: number,
    h: number,
    pointsToModify: {
      xs: number[]
      ys: number[]
    },
    dragged = false,
    shift = false
  useEffect(() => {
    const onKeyDown = (e: any) => {
      let key = e.keyCode || e.which
      if (key == 16) shift = true
    }
    const onKeyUp = (e: any) => {
      shift = false
    }
    document.addEventListener('keydown', onKeyDown)
    document.addEventListener('keyup', onKeyUp)
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.removeEventListener('keyup', onKeyUp)
    }
  }, [])
  useEffect(() => {
    if (!canvasRef.current) return
    const canvas = canvasRef.current
    canvas.width = 280
    canvas.height = 280
    ctx.current = canvas.getContext('2d')
    if (!originalImageData)
      setOriginalImageData(
        (targetCanvas.getContext('2d') as any).getImageData(
          0,
          0,
          targetCanvas.width,
          targetCanvas.height
        )
      )
  }, [canvasRef.current, targetCanvas])
  useEffect(() => {
    setCurrentCurves(defaultCurves)
  }, [currentChannel])
  useEffect(() => {
    if (!originalImageData) return
    Apply(
      originalImageData,
      targetCanvas,
      targetCanvas.getContext('2d') as any,
      currentCurves
    )
  }, [currentCurves])
  useEffect(() => {
    if (!canvasRef.current || !ctx.current) return
    Draw(
      canvasRef.current,
      ctx.current,
      currentCurves[currentChannel].xs,
      currentCurves[currentChannel].ys
    )
  })
  const removePoint = (index: number) => {
    let newPoints = currentCurves

    if (index === 0 || index >= newPoints[currentChannel].xs.length - 1) return

    newPoints[currentChannel].xs.splice(index, 1)
    newPoints[currentChannel].ys.splice(index, 1)
    setCurrentCurves({ ...newPoints })
  }

  const changeCurve = (points: { xs: number[]; ys: number[] }) => {
    let curveToChange = {}
    curveToChange[currentChannel] = points
    setCurrentCurves({ ...currentCurves, curveToChange } as any)
  }

  const addPoint = (x: number, y: number) => {
    let index = null
    let newPoints = { ...currentCurves }
    for (let i = 0; i < newPoints[currentChannel].xs.length; i++) {
      if (
        x > newPoints[currentChannel].xs[i] &&
        x < newPoints[currentChannel].xs[i + 1]
      ) {
        index = i + 1
        continue
      }
    }

    newPoints[currentChannel].xs.splice(index as number, 0, x)
    newPoints[currentChannel].ys.splice(index as number, 0, y)
    setCurrentCurves(newPoints)
  }

  const onMouseDown = (
    e: any,
    canvas: HTMLCanvasElement,
    points: {
      xs: number[]
      ys: number[]
    }
  ) => {
    dragging = false
    ;(draggingPont as any) = null
    ;(pointsToModify as any) = null
    w = canvas.width
    h = canvas.height

    x = e.nativeEvent.offsetX || e.nativeEvent.layerX
    y = h - (e.nativeEvent.offsetY || e.nativeEvent.layerY)

    for (var i = 0; i < points.xs.length; i++) {
      if (
        x >= points.xs[i] * w - 6 &&
        x <= points.xs[i] * w + 6 &&
        y >= points.ys[i] * h - 6 &&
        y <= points.ys[i] * h + 6
      ) {
        dragging = true
        draggingPont = i
        pointsToModify = Object.assign({}, points)
        continue
      }
    }

    if (dragging && shift) {
      dragging = false
      ;(draggingPont as any) = null
      removePoint(draggingPont + 1)
    }
  }

  const onMouseMove = (
    e: any,
    canvas: HTMLCanvasElement,
    ctx: CanvasRenderingContext2D
  ) => {
    if (
      !dragging ||
      draggingPont == 0 ||
      draggingPont == pointsToModify.xs.length - 1
    )
      return

    dragged = true

    let mx = e.nativeEvent.offsetX || e.nativeEvent.layerX
    let my = e.nativeEvent.offsetY || e.nativeEvent.layerY

    pointsToModify.xs[draggingPont] = mx / w
    pointsToModify.ys[draggingPont] = (h - my) / h
    Draw(canvas, ctx, pointsToModify.xs, pointsToModify.ys)
  }

  const onMouseUp = () => {
    dragging = false
    if (dragged) {
      changeCurve(pointsToModify)
      dragged = false
    }
  }

  const onDoubleClick = (
    e: any,
    points: {
      xs: number[]
      ys: number[]
    }
  ) => {
    let dx = e.nativeEvent.offsetX || e.nativeEvent.layerX
    let dy = h - (e.nativeEvent.offsetY || e.nativeEvent.layerY)
    if (
      spline(round(dx / w), points.xs, points.ys) * h >= dy - 8 &&
      spline(round(dx / w), points.xs, points.ys) * h <= dy + 8
    ) {
      addPoint(round(dx / w), round(dy / h))
    }
  }

  return (
    <div>
      <canvas
        ref={canvasRef}
        onMouseDown={(e) =>
          onMouseDown(
            e,
            canvasRef.current as HTMLCanvasElement,
            currentCurves[currentChannel]
          )
        }
        onMouseMove={(e) =>
          onMouseMove(
            e,
            canvasRef.current as HTMLCanvasElement,
            ctx.current as CanvasRenderingContext2D
          )
        }
        onMouseUp={onMouseUp}
        onDoubleClick={(e) => onDoubleClick(e, currentCurves[currentChannel])}
      />
    </div>
  )
}
