import React, {useEffect, useRef, useState} from 'react'

export default function App() {

    const firstRef = useRef(null);
    const inputRef = useRef(null);
    console.log(firstRef)
    const [state, setState] = useState(0)

    useEffect(()=>{
        //how many times my components state got updated
        firstRef.current = firstRef.current + 1;

        console.log(inputRef)
    }, [state])

    useEffect(()=>{
        // inputRef.current.focus()
    },[])

  return (
    <div>
        <p>App</p>
        <p>{state}</p>
        <p>{firstRef.current}</p>
        <button onClick={()=> setState(state+1)}>Increment</button>
        <button onClick={()=> firstRef.current = firstRef.current + 10}>Increment ref</button>
        <input type="text" ref={inputRef}/>
    </div>
  )
}
