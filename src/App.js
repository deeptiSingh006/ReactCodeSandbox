import "./styles.css";
//import { useRef, useState } from "react";
//import Counter from "./Counter";
import Choice from "./Choice";
import SelectChoice from "./SelectChoice";
// Program to take 3 inputs and demonstrate at form submit
export default function App() {
  /* const car = useRef();
  const model = useRef();
  const quant = useRef();
  const [list1, setList1] = useState([]);
  function listHandler(e) {
    e.preventDefault();
    const carObj = {
      CarName: car.current.value,
      Model: model.current.value,
      quantity: quant.current.value
    };
    setList1([...list1, carObj]);
    car.current.value = "";
    model.current.value = "";
    quant.current.value = "";
  }

  return (
    <div className="App">
      <form onSubmit={listHandler}>
        <label> car name </label>
        <input ref={car}></input>
        <br />
        <br />
        <label> model </label>
        <input ref={model}></input>
        <br />
        <br />
        <label> quantity </label>
        <input ref={quant}></input>
        <br />
        <br />
        <button>submit</button>
      </form>
      <table>
        <tr>
          <th>Car</th>
          <th>Model</th>
          <th>Quantity</th>
        </tr>
        {list1.map((i) => {
          return (
            <tr>
              <td>{i.CarName}</td>
              <td>{i.Model}</td>
              <td>{i.quantity}</td>
            </tr>
          );
        })}
      </table>
      <Counter />
    </div>*/
  return <Choice />;
}
