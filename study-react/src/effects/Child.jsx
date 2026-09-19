import React, {useEffect, useState} from 'react'

export default function Child() {
    const [count, setCount] = useState(0)
    const [count2, setCount2] = useState(10)

    const [automaticTimer, setAutomaticTimer] = useState(10)
    
    //mount -> 
    useEffect(()=>{
        console.log('My Child component got mounted')
        return () => {
            console.log('unmounted')
        }
    },[])

    useEffect(()=>{
        console.log('Count value got updated')

        return () => {
            console.log('xyz')
        }
    },[count, count2])

    // useEffect(()=>{
    //     return () => {
    //         console.log('unmounted')
    //     }
    // }, [])

    // useEffect(()=>{
    //     //setTimeout - previous update hue then I am start a new timer for 1 second so that it 
    //     //updates value after 1s
    //     if(automaticTimer >= 1){
    //         const timerId = setTimeout(()=>{
    //             setAutomaticTimer((prev)=>{
    //                 return prev - 1;
    //             })
    //         },1000)

    //         return () => {
    //             console.log(timerId)
    //             clearTimeout(timerId)
    //         }
    //     }
        
    // }, [automaticTimer])

    useEffect(()=>{
        const timerId = setInterval(()=>{
            setAutomaticTimer((prev)=>{
                console.log(prev)
                // if(prev <=1){
                //     clearInterval(timerId)
                // }
                return prev - 1;
            })
        }, 1000)

        return () => {
            clearInterval(timerId)
        }
    }, [])



  return (
    <div>
        <p>Child</p>
        <p>{count}</p>
        <p>{count2}</p>
        <p>Automatic Timer: {automaticTimer}</p>
        <button onClick={()=> setCount(count+1)}>increase</button>
        <button onClick={()=> setCount2(count2+1)}>increase2</button>
    </div>
  )
}
