import { useState } from "react"
import MyContext from "./MyContext"

const Provider = (props) => {
    const [mission, setMission] = useState({
        name: "alpha bravo",
        numberOfAgentsRequired: 10,
        currentAgentWhoAccepted: [],
    })

    function missionAccept(agentName){
        setMission({
            ...mission, 
            numberOfAgentsRequired: mission.numberOfAgentsRequired -1,
            currentAgentWhoAccepted: [...mission.currentAgentWhoAccepted, agentName]
        })
    }

    return (
        <MyContext.Provider
            value={{
                data: mission,
                missionAccept: missionAccept
            }}
        >
            {console.log(props.children)}
            {props.children}

        </MyContext.Provider>
    )
}
export default Provider