import React, { useMemo, useState, useCallback } from 'react'
import Child from './Child'

export default function App() {
    const [count, setCount] = useState(10)
    const [count2, setCount2] = useState(10)
    // const array = [1,2,3,4]

    const array = useMemo(()=>{
        return [1,2,3,4, count];
    },[])

    const calculateSum = useCallback(
        (a,b,c,d) => {
            return a+b+c+d + count
        }, [count]
    )

    // function calculateSum(a,b,c,d){
    //     return a+b+c+d
    // }
  return (
    <>
        <button onClick={()=>{ console.log(count+1); setCount(count + 1)}}>Increase Count</button>
        <button onClick={()=>{ console.log(count2+1); setCount2(count2 + 1)}}>Increase Count</button>

        {/* <Child timer ={10}/> */}
        {/* <Child timer = {array} /> */}
        <Child timer = {calculateSum} />
    </>
  )
}
