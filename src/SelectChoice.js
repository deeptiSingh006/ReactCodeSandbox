import { useState } from "react";
import Choice from "./Choice";
function SelectChoice() {
  const [list1, setList1] = useState([]);
  function result(value) {
    setList1([...list1, ...value]);
  }

  return (
    <div>
      <label> checked items are:</label>
      <span>
        {" "}
        {list1.map((i) => {
          return { i };
        })}
      </span>
      <Choice result={result} />
    </div>
  );
}
export default SelectChoice;
