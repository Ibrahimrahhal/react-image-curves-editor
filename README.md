# react-image-curves-editor

> React components to manipulate images curves like within photoshop

[![NPM](https://img.shields.io/npm/v/react-image-curves-editor.svg)](https://www.npmjs.com/package/react-image-curves-editor) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-image-curves-editor
```

## Usage

```tsx
import React, { Component } from 'react'

import {CurvesEditor} from 'react-image-curves-editor'
import 'react-image-curves-editor/dist/index.css'

class Example extends Component {
  const canvas = useRef<HTMLCanvasElement>();
  render() {
    return <CurvesEditor targetCanvas={canvas.current} />
  }
}
```

## License

MIT © [ibrahimrahhal](https://github.com/ibrahim)
