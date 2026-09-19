import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "./CounterSlice";

const Counter = () => {
    const dispatch = useDispatch();
    const counterValue = useSelector((state) => state.counter)

    console.log(counterValue);
    
    const handleIncrement = (number) => {
        dispatch(increment(number))
    }

    const handleDecrement = (number) => {
        dispatch(decrement(number))
    }


    return (
        <div>
            <h1>Redux Toolkit based counter</h1>
            <section>
                <h3>Counter</h3>
                <button onClick={()=> handleIncrement(10)}>Increment</button>
                <button onClick={()=> handleDecrement(4)}>Decrement</button>
                <h4>Counter Display: {counterValue}</h4>
            </section>
        </div>
    )
}

export default Counter;