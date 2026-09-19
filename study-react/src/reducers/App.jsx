import React, { useReducer, useState } from 'react'
import counterReducer from './counterReducer.js'
import { INCREMENT, DECREMENT, INCREMENTCOUNTVALUE } from './constants.js'
//counter

export default function App() {
    const [state, dispatch] = useReducer(counterReducer, {count: 10})

    const [state2, setState2] = useState(10)

  return (
    <div>
        <p>{state.count}</p>
        <button onClick={()=>{dispatch({type: INCREMENTCOUNTVALUE, incrementCountValue: 7})}}>incremenet</button>
    </div>
  )
}
