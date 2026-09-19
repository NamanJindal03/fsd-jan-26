import Heading from "./Heading"
export default function App({number}){
    // const {name, age} = props
    return (
        // <>
        //     <h1>heading : {name} : {age}</h1>
        //     <Heading />
        // </>
        <>
            <h1>SOmethign</h1>
            {number > 5 ? <Heading/> : null}
        </>
    )
}

// export function random(){
//     console.log('random')
// }