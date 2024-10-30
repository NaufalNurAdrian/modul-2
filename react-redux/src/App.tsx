import { useDispatch } from "react-redux";
import { useCounter } from "./assets/context/counterContext";
import DisplayCounter from "./components/display";
import { decrement, increment } from "./store/counterSlice";
import DisplayCounter2 from "./components/display2";

function App() {
  const dispatch = useDispatch();
  const {count, increment: inc, decrement: dec} = useCounter()

  return (
    <div>
      <button onClick={() => dispatch(increment())}>increment</button>
      <DisplayCounter />
      <button onClick={() => dispatch(decrement())}>decrement</button>
      <DisplayCounter2 />
      
      <button onClick={inc}>increment</button>
        <h1>{count}</h1>
      <button onClick={dec}>decrement</button>
    </div>
  );
}

export default App;
