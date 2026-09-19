import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react'


import App from './App'
// import { random } from './App'

import './main.css'

// const Data = [['naman', 10], ['miten', 11], ['sampada', 12]]


createRoot(document.getElementById('root')).render(
  <div>
    <>
      <App number={5}/>

      {/* <h1 className='random'>This is my react starting</h1>
      <p>3+2</p> */}
      {/* {Jhingalala('naman', 10)} */}
      {/* <Jhingalala name={Data[0][0]} age={Data[0][1]}/>
      <Jhingalala name={Data[1][0]} age={Data[1][1]}/> */}
      {/* <Jhingalala name={'naman3'} age={30}/>
      <Jhingalala name={'naman4'} age={60}/> */}
      {/* <input type="text" placeholder='xyz'/> */}
      {
        // Data.map((person)=>(
        //   // const [name, age] = person; //destructing
        //   // return (
        //     <Jhingalala name={name} age={age}/>
        //   // )
        // ))
      }
    </>
  </div>
)
