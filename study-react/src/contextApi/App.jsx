import React from 'react'
import Provider from './context/Provider'
import Child from './components/Child'

export default function App() {
  return (
    <Provider>
        <h1>Mission Zero Dashboard</h1>
        <Child />
    </Provider>
  )
}
