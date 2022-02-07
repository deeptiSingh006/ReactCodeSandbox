import { useState } from "react";
function Counter() {
  const [counter, setCounter] = useState(0);

  function incCounterHandler(e) {
    e.preventDefault();
    let prevC = counter;
    setCounter(++prevC);
  }
  function decCounterHandler(e) {
    e.preventDefault();
    let prevC = counter;
    setCounter(--prevC);
  }
  return (
    <div>
      {" "}
      <label> increment </label>
      <button onClick={incCounterHandler}>increment</button>
      <br />
      <br />
      <label> decrement </label>
      <button onClick={decCounterHandler}>decrement</button>
      <h3>COUNTER:{counter}</h3>
    </div>
  );
}
export default Counter;
