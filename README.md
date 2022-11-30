# react-js-dropdavn

> Made with create-react-library

[![NPM](https://img.shields.io/npm/v/react-js-dropdavn.svg)](https://www.npmjs.com/package/react-js-dropdavn) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install react-js-dropdavn
```

## Usage

```jsx
import React, { Component } from 'react'

import { SimpleDropdown } from 'react-js-dropdavn'
import 'react-js-dropdavn/dist/index.css'

const data = [
  {label: 'Ex opt 1', value: 1},
  {label: 'Ex opt 2', value: 2},
  {label: 'Ex opt 3', value: 3},
  {label: 'Ex opt 4', value: 4},
]

class Example extends Component {
  render() {
    return (
    <SimpleDropdown
        options={data}
        clearable
        searchable
        configs={
          { position: { y: 'top', x: 'center' } }
        }
      />
      );
  }
}
```

## License

MIT © [devepdogu](https://github.com/devepdogu)
