# react-js-dropdavn

> Made with create-react-library 1.0.4

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
## Props

<table>
  <thead>
    <tr>
      <th>name</th>
      <th>type</th>
      <th>default value</th>
      <th>description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>options</td>
      <td><code>[{ label:String , key:String }]</code></td>
      <td><code>[]</code></td>
      <td>The dropdown options for list</td>
    </tr>
    <tr>
      <td>searchable</td>
      <td><code>Boolean</code></td>
      <td><code>false</code></td>
      <td>It's add search bar for dropdown</td>
    </tr>
    <tr>
      <td>clearable</td>
      <td><code>Boolean</code></td>
      <td><code>false</code></td>
      <td>It's add clear button for dropdown</td>
    </tr>
    <tr>
      <td>labels</td>
      <td>
        <b>{</b>
        <p><b>notFoundSearch</b> : 'Not found'</p>
        <p><b>notSelected</b> : 'Select any thing'</p>
        <p><b>selectedPrefix</b> : 'Your Choice :'</p>
        <p><b>search</b> : 'Search area'</p>
        <p><b>seachInputPlaceholder</b> : 'Search for typing'</p>
        <b>}</b>
      </td>
      <td><code>null</code></td>
      <td>It's changes dropdown texts</td>
    </tr>
    <tr>
      <td>defaultValue</td>
      <td><code>String | Number</code></td>
      <td><code>null</code></td>
      <td>It's default selected value</td>
    </tr>
    <tr>
      <td>configs</td>
      <td>
        <p>position: <b>{</b>
        <p>y: 'bottom' | 'top',</p>
        <p>x: 'left' | 'right' | 'center'</p><b>}</b>,</p>
        <p><b>fullWidthParent </b>: boolean</p>
      </td>
      <td><code>null</code></td>
      <td>It's dropdown position and width configs</td>
    </tr>
    <tr>
      <td>onClearSelected</td>
      <td><code>function => void</code></td>
      <td><code>null</code></td>
      <td>It's triggered when clear button clicked</td>
    </tr>
    <tr>
      <td>onDropdownOpened</td>
      <td><code>function => void</code></td>
      <td><code>null</code></td>
      <td>It's triggered when dropdown opened</td>
    </tr>
    <tr>
      <td>onDropdownClosed</td>
      <td><code>function => void</code></td>
      <td><code>null</code></td>
      <td>It's triggered when dropdown closed</td>
    </tr>
    <tr>
      <td>onDropdownInit</td>
      <td><code>function => void</code></td>
      <td><code>null</code></td>
      <td>It's triggered when dropdown initialize</td>
    </tr>
    <tr>
      <td>onSearchTyping</td>
      <td><code>function({ search, filteredOptions }) => void</code></td>
      <td><code>null</code></td>
      <td>It's triggered when search bar on changed</td>
    </tr>
  </tbody>
</table>


## License

MIT © [devepdogu](https://github.com/devepdogu)
