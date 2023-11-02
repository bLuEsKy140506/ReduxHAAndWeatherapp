import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../features/reduxSlices/counterSlice";

export default function Counter() {
  const data = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <>
      <div className="flex-row task1-display">
        <button
          onClick={() => {
            dispatch(increment(data.counter));
          }}
        >
          +
        </button>
        <span>{data.counter}</span>
        <button
          onClick={() => {
            dispatch(decrement(data.counter));
          }}
        >
          -
        </button>
      </div>
    </>
  );
}
