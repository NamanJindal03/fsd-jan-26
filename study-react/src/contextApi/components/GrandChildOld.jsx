import React, { useState } from 'react'
// import MyContext from '../context/MyContext'
import { useContext } from 'react'

export default function GrandChild() {
    // const MyContextData = useContext(MyContext)
    // console.log(MyContextData)
    const [name, setName] = useState('')
  return (
    <>
        <MyContext.Consumer>
            {
                (context) => (
                    <>
                        <h3>Mission 1: Details</h3>
                        <p>{context.data.name}</p>
                        <p>Entries Left: {context.data.numberOfAgentsRequired}</p>
                        <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
                        <h3>Accepted List</h3>
                        {
                            context.data.currentAgentWhoAccepted.map((agentName)=>{
                                return (
                                    <li>{agentName}</li>
                                )
                            })
                        }
                        <button onClick={() => {
                            context.missionAccept(name)
                            setName('')
                        }}>Add</button>
                    </>
                )
            }
        </MyContext.Consumer>
    </>
  )
}
