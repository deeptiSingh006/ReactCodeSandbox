import { useState, useRef } from "react";
function Choice(props) {
  const [isChecked, setIsChecked] = useState([]);

  const ot = useRef();
  const ob = useRef();
  function updateCheck(e) {
    const ch = e.target.checked;
    if (ch || ot) {
      if (ob.current.value === "other") {
        console.log(ot.current.value);
        setIsChecked([...isChecked, ot.current.value]);
      } else {
        setIsChecked([...isChecked, e.target.value]);
      }
    } else {
      if (e.target.value !== "other") {
        const index = isChecked.indexOf(e.target.value);
        isChecked.splice(index, 1);
        setIsChecked(isChecked);
      } else {
        const index = isChecked.indexOf(ot.current.value);
        isChecked.splice(index, 1);
        setIsChecked(isChecked);
      }
    }
  }

  return (
    <div>
      <form>
        <fieldset>
          <legend>Choose your interests</legend>
          <div>
            <input
              type="checkbox"
              id="coding"
              name="interest"
              value="coding"
              onChange={updateCheck}
            ></input>
            <label>Coding</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="music"
              name="interest"
              value="music"
              onChange={updateCheck}
            ></input>
            <label>Music</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="munching"
              name="interest"
              value="munching"
              onChange={updateCheck}
            ></input>
            <label>Munching</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="travelling"
              name="interest"
              value="travelling"
              onChange={updateCheck}
            ></input>
            <label>Travelling</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="sports"
              name="interest"
              value="sports"
              onChange={updateCheck}
            ></input>
            <label>Sports</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="cooking"
              name="interest"
              value="cooking"
              onChange={updateCheck}
            ></input>
            <label>Cooking</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="other"
              name="interest"
              value="other"
              onChange={updateCheck}
              ref={ob}
            ></input>
            <label>Other</label>
            <input type="text" onChange={updateCheck} ref={ot}></input>
          </div>
        </fieldset>
      </form>
      <table>
        {isChecked.map((i) => {
          return (
            <tr>
              <td>{i}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}
export default Choice;
