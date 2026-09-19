import { INCREMENT, DECREMENT, INCREMENTCOUNTVALUE } from "./constants"
//this function react calls on my behalf whenever we want to update a certain state. 
export default function reducer(state, action){
    //all the functioanlities 
    switch(action.type){
        case INCREMENT:
            return {...state, count: state.count + 1}

        case DECREMENT:
            return {...state, count: state.count - 1}

        case 'reset':
            return {...state, count: 0}

        case INCREMENTCOUNTVALUE:
            return {...state, count: state.count + action.incrementCountValue}
    }
}