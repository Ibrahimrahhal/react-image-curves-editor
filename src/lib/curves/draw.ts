import spline from 'cubic-spline'

let treshold = 2

export default (
  canvas: HTMLCanvasElement,
  ctx: CanvasRenderingContext2D,
  xs: number[],
  ys: number[]
) => {
  if (!canvas || !ctx) return

  window.requestAnimationFrame(() => {
    ctx.beginPath()
    ctx.rect(0, 0, canvas.width, canvas.height)
    ctx.fillStyle = '#5f5f5f'
    ctx.fill()

    ctx.beginPath()
    ctx.moveTo(0, canvas.height)
    ctx.lineWidth = 2
    ctx.strokeStyle = '#f1f1f1'
    ctx.fillStyle = '#f1f1f1'

    for (let i = 0; i < canvas.width / treshold; i++) {
      ctx.lineTo(
        ((i * treshold) / canvas.width) * canvas.width,
        canvas.height -
          spline((i * treshold) / canvas.width, xs, ys) * canvas.height
      )
    }

    ctx.lineTo(
      xs[xs.length - 1] * canvas.width,
      canvas.height - ys[ys.length - 1] * canvas.height
    )

    ctx.stroke()

    for (let i = 0; i < xs.length; i++) {
      ctx.beginPath()
      ctx.arc(
        xs[i] * canvas.width,
        canvas.height - ys[i] * canvas.height,
        8,
        0,
        2 * Math.PI,
        false
      )
      ctx.fill()
      ctx.stroke()
    }
  })
}
