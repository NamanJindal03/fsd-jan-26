import React, { useState } from 'react'
import Child from './Child' 

export default function App() {
    const [isChild, setIsChild] = useState(false)
  return (
    <div>
        <p>App</p>

        <button onClick={()=> setIsChild(!isChild)}>Toggle Child Visibility</button>

        {isChild && <Child />}

    </div>
  )
}
