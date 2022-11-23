# react-image-curves-editor

> React components to manipulate images curves like within photoshop

[![NPM](https://img.shields.io/npm/v/react-image-curves-editor.svg)](https://www.npmjs.com/package/react-image-curves-editor) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-image-curves-editor
```

## Example
https://ibrahimrahhal.github.io/react-image-curves-editor/
## Usage

```tsx
import { useEffect } from 'react'
import { ImageCurvesEditor, ImageLevelsHistogram } from 'react-image-curves-editor'
import 'react-image-curves-editor/dist/index.css'

const Example = () => {
    const canvasRef = React.useRef<HTMLCanvasElement>(null);
    const [loaded, setLoaded] = React.useState(false);
    useEffect(() => {
        if (!canvasRef.current) return;
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;
        const img = new Image();
        img.onload = () => {
            canvas.width = img.width;
            canvas.height = img.height;
            ctx.drawImage(img, 0, 0);
            setLoaded(true);
        };
        img.src = '/house.jpg';
    }, [])
  return (
    <div>
      <canvas ref={canvasRef}></canvas>
      {loaded && <ImageLevelsHistogram targetRef={canvasRef.current} />}
      {loaded && <ImageCurvesEditor targetCanvas={canvasRef.current} />}
    </div>
  )
}
```

## License

MIT © [ibrahimrahhal](https://github.com/ibrahimrahhal)
