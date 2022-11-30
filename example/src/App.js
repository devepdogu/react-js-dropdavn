import React, { useEffect, useState } from 'react'
import CODES from './data'
import { SimpleDropdown } from 'react-js-dropdavn'
import 'react-js-dropdavn/dist/index.css'


const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    async function getData() {
      fetch(url).then((res) => res.json()).then((_res) => setData(_res))
    }
    getData();
  }, [])

  const labels = {
    notFoundSearch: 'Not found',
    notSelected: 'Select any thing',
    selectedPrefix: 'Your Choice :',
    search: 'Search area',
    seachInputPlaceholder: 'Search for typing'
  }

  return (
    <div className="App">
      <SimpleDropdown
        options={CODES}
        searchable
        clearable
        labels={labels}
        defaultValue='90'
        configs={
          { position: { y: 'bottom', x: 'center' }, fullWidthParent: true }
        }
        onClearSelected={() => console.log("selected is gone")}
        onDropdownOpened={() => console.log("opened")}
        onDropdownClosed={() => console.log("closed")}
        onDropdownInit={() => console.log("initialize")}
        onSearchTyping={({ search, filteredOptions }) => console.log(search, filteredOptions)}
      />
      <SimpleDropdown
        options={data.map((item) => ({ label: item.title, value: item.id }))}
        clearable
        searchable
        configs={
          { position: { y: 'top', x: 'center' } }
        }
      />
    </div>
  )
}

export default App
