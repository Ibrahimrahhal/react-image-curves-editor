let array256 = () => {
  let arr = []
  for (let i = 0; i < 256; i++) {
    arr[i] = 0
  }
  return arr
}

let _c: HTMLCanvasElement = document.createElement('canvas'),
  _ctx: CanvasRenderingContext2D = _c.getContext('2d') as any,
  data: any,
  histogramData: { [k: string]: number[] | number }

let colors = {
  r: '#d22121',
  g: '#079407',
  b: '#1b1bbb',
  a: '#d6d6d6'
}

export default (
  canvas: HTMLCanvasElement,
  ctx: CanvasRenderingContext2D,
  image: HTMLImageElement | HTMLCanvasElement
) => {
  if (!canvas || !ctx) return

  window.requestAnimationFrame(() => {
    ctx.beginPath()
    ctx.rect(0, 0, canvas.width, canvas.height)
    ctx.fillStyle = '#5f5f5f'
    ctx.fill()

    histogramData = {}
    histogramData.a = array256()
    histogramData.r = array256()
    histogramData.g = array256()
    histogramData.b = array256()

    if (typeof (image as HTMLImageElement).height === 'number') {
      _c.width = parseInt(((image as HTMLImageElement).width / 4) as any)
      _c.height = parseInt(((image as HTMLImageElement).height / 4) as any)
      _ctx.drawImage(image as HTMLImageElement, 0, 0, _c.width, _c.height)
    } else {
      _ctx = (image as HTMLCanvasElement).getContext('2d') as any
    }
    data = _ctx.getImageData(0, 0, _c.width, _c.height).data
    for (var i = 0; i < data.length; i += 4) {
      let _all =
        parseInt((data[i] / 3) as any) +
        parseInt((data[i + 1] / 3) as any) +
        parseInt((data[i + 2] / 3) as any)
      if (_all > histogramData.a.length - 1) _all = histogramData.a.length - 1
      histogramData.a[_all]++
      histogramData.r[data[i]]++
      histogramData.g[data[i + 1]]++
      histogramData.b[data[i + 2]]++
    }

    histogramData.max = parseInt(data.length) * 0.75

    ctx.lineWidth = 1
    for (let key in colors) {
      ctx.strokeStyle = colors[key]
      ctx.beginPath()
      ctx.moveTo(0, canvas.height)
      for (let i = 0; i < 256; i++) {
        let hist = (histogramData[key][i] / histogramData.max) * 256
        ctx.lineTo(
          parseInt(((i / 256) * canvas.width) as any),
          (1 - hist) * (canvas.height * 0.7) + canvas.height * 0.3
        )
      }
      ctx.lineTo(canvas.width, canvas.height)
      ctx.stroke()
    }
  })
}
