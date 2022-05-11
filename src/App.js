import "./App.css";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  increment,
  decrement,
  incrementAmount,
  fetchCountAsync,
} from "./feature/counter/counterSlice";
import {Counter} from "./feature/counter/index";

function App() {
  const [amount, setAmount] = useState(0);
  const { count, loadingStatus } = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <div className="App">
    <Counter />
    </div>
  );
}

export default App;
