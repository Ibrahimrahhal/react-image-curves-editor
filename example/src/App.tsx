import React, { useEffect } from 'react'
import { ImageCurvesEditor, ImageLevelsHistogram } from 'react-image-curves-editor'
import 'react-image-curves-editor/dist/index.css'

const App = () => {
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
        img.src = '/react-image-curves-editor/house.jpg';
    }, [])
  return (
    <div>
      <h1 style={{textAlign: 'center'}}>Curves Editor Demo</h1>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <div style={{
          margin: '0 20px',
        }}>
          <canvas ref={canvasRef}></canvas>
        </div>
        <div>
        {loaded && <ImageLevelsHistogram targetRef={canvasRef.current as any} />}
        {loaded && <ImageCurvesEditor targetCanvas={canvasRef.current as any} />}
        </div>
      </div>
      <h5 style={{textAlign: 'center'}}>Double click on levels to add new item & shit + mouse click to remove it</h5>
    </div>
  )
}

export default App
