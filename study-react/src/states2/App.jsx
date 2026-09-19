import React, { useState } from 'react'

export default function App() {
    const [counter, setCounter] = useState(0)
    function handleClick(){
        setCounter((prevState)=>{
            console.log(prevState)
            return prevState + 1
        });
         setCounter((prevState)=>{
            console.log(prevState)
            return prevState + 1
        });
    }
  return (
    <>x
        <div>State: {counter}</div>
        <button onClick={handleClick}>Increment 2 times</button>
    </>
  )
}
