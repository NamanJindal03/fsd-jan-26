import React, { useState } from 'react'
// import MyContext from '../context/MyContext'
// import { useContext } from 'react'
import { useMyContextData } from '../context/MyContext'
import sceneryImage from './istockphoto-1381637603-612x612.jpg'

export default function GrandChild() {
    // const MyContextData = useContext(MyContext)
    // console.log(MyContextData)
    const MyContextData = useMyContextData()
    const [name, setName] = useState('')
  return (
  <>
        <h3>Mission 1: Details</h3>
        <p>{MyContextData.data.name}</p>
        <p>Entries Left: {MyContextData.data.numberOfAgentsRequired}</p>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
        <h3>Accepted List</h3>
        {
            MyContextData.data.currentAgentWhoAccepted.map((agentName, index)=>{
                return (
                    <li key={index}>{agentName}</li>
                )
            })
        }
        <button onClick={() => {
            MyContextData.missionAccept(name)
            setName('')
        }}>Add</button>
        <img src={sceneryImage} alt="" />
    </>
  )
}
