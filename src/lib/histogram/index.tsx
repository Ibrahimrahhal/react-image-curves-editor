import React, { useEffect, useRef } from 'react'
import Draw from './draw'

export default ({
  targetRef
}: {
  targetRef: HTMLImageElement | HTMLCanvasElement
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const ctx = useRef<CanvasRenderingContext2D | null>(null)
  useEffect(() => {
    if (!canvasRef.current) return
    const canvas = canvasRef.current
    canvas.width = 280
    canvas.height = 140
    ctx.current = canvas.getContext('2d')
  }, [canvasRef.current])

  useEffect(() => {
    if (!ctx.current || !canvasRef.current) return
    Draw(canvasRef.current, ctx.current, targetRef)
  }, [ctx.current])

  return (
    <div>
      <canvas ref={canvasRef} />
    </div>
  )
}
