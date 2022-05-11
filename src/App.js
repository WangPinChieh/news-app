import "./App.css";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  increment,
  decrement,
  incrementAmount,
  fetchCountAsync,
} from "./feature/counter/counterSlice";

function App() {
  const [amount, setAmount] = useState(0);
  const { count, loadingStatus } = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <div>Count: {count}</div>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(fetchCountAsync())}>FetchCount</button>
      <div>Loading Status: {loadingStatus}</div>
      <div>
        <button onClick={() => dispatch(incrementAmount(amount))}>
          IncrementAmount
        </button>
        Amount:
        <input type="number" onChange={(e) => setAmount(e.target.value)} />
      </div>
    </div>
  );
}

export default App;
