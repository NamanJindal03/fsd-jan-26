import { useState } from "react";
import Child from "./Child";

 
 let outsideVariable = 30;
let firstTime = 0;


export default function App(){

    // let a = 100;
    const stateData = useState(100) //we need to send the initial value of the variable
    const [inputDataState, setInputDataState] = useState('naman')
    let [a, fancyFunk] = stateData;


   
    
    let insideVariable = 0; 
    console.log(stateData)
    if(firstTime === 0){
        console.log('Painted')
        firstTime++;
    }
    else{
        console.log('repainted')
    }

    function handleSubmit(e){
        e.preventDefault(); 
        console.log('I have submitted the form')
    }

    return (
        <>
            <Child />

            <form onSubmit={handleSubmit}>
                <input type="text" value={inputDataState} onChange={(e)=> setInputDataState(e.target.value) }/>
                <button >Submit</button>
            </form>

            <div>{a}</div>
            <div>
                <button onClick={() => {
                            fancyFunk(a+1)
                            // console.log(a)
                        }}> 
                    Incremenet
                </button>
            </div>
            <hr/>
            
            <div>
                <div>{outsideVariable}</div>
                <button onClick={() => {
                            outsideVariable = outsideVariable + 1
                            console.log(outsideVariable)
                        }}> 
                    Incremenet Normal Variable
                </button> 
            </div>

            <hr/>
            
            <div>
                <div>{insideVariable}</div>
                <button onClick={() => {
                            insideVariable = insideVariable + 1
                            console.log(insideVariable)
                        }}> 
                    Incremenet Inside Variable
                </button> 
            </div>
        </>
    )
}