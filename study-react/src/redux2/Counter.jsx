import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "./CounterSlice";
import { fetchRandomCounterValue } from "./counterThunk";

const Counter = () => {
    const dispatch = useDispatch();
    const counterValue = useSelector((state) => state.counter)
    const {counter, loading, error} = counterValue;
    
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
                <button onClick={()=> dispatch(fetchRandomCounterValue())}>Fetch Random Counter</button>
                <h4>Counter Display: {counter}</h4>

                {loading && <p>Loading.....</p>}
                {error && <p>{error}</p>}
            </section>
        </div>
    )
}

export default Counter;