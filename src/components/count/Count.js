import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../../store/slices/counterSlice";

export default function Count() {
    const count = useSelector((store) => store.counterReducer.count);
    // console.log("count component", count);
    const dispatch = useDispatch();

    const doIncrement = () => {
        dispatch(increment());
    };
    const doDecrement = () => {
        dispatch(decrement());
    };

    return (
        <div className="counter-container">
            <h1>Counter</h1>
            <div className="counter-buttons">
                <button onClick={doDecrement}>-</button>
                <span>{count}</span>
                <button onClick={doIncrement}>+</button>
            </div>
        </div>
    );
}
