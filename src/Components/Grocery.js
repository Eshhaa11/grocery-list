import { useState } from "react";
import './Grocery.css';

function Grocery() {
  const [grocitem, setGrocItem] = useState([]);
  const [newGroc, setNewGroc] = useState("");

  function addgrocitem() {
    if (newGroc === "") return;
    setGrocItem([...grocitem, { name: newGroc, checked: false }]);
    setNewGroc("");
  }

  function toggleCheck(index) {
    const updatedGroc = [...grocitem];
    updatedGroc[index].checked = !updatedGroc[index].checked;
    setGrocItem(updatedGroc);
  }

  function deleteGroc(index) {
    const updatedGroc = [...grocitem];
    updatedGroc.splice(index, 1);
    setGrocItem(updatedGroc);
  }

  return (
    <div className="cont">
      <h1>Grocery List</h1>
      <input
        value={newGroc}
        onChange={(e) => setNewGroc(e.target.value)}
        placeholder="Grocery Item"
      />

      <button onClick={addgrocitem}>Add this Grocery</button>

      <ul>
        {grocitem.map((grocitem, index) => (
          <li key={index}>
            <input
              type="checkbox"
              checked={grocitem.checked}
              onChange={() => toggleCheck(index)}
            />

            <span
              style={{ textDecoration: grocitem.checked ? "line-through" : "" }}
            >
              {grocitem.name}
            </span>

            <button onClick={() => deleteGroc(index)}>Delete</button> 
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Grocery;
