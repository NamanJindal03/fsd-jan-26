
import React, {useContext} from "react";
const MyContext = React.createContext(); //just one line is needed to create a store

export function useMyContextData(){
    return useContext(MyContext)
}

export default MyContext