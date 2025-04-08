import { useState } from "react";
import './Grocery.css'

function Grocery() {
  const [grocitem, setGrocItem] = useState([]);
  const [newGroc, setNewGroc] = useState("");

  function addItem() {
    if (newGroc === "") return;
    setNewGroc([...grocitem, { name: newGroc, checked: false }]);
    setNewItem("");
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
    <div className="container">
      <h2>Grocery List</h2>
      <input
        value={newGroc}
        onChange={(e) => setNewGroc(e.target.value)}
        placeholder="Add Grocery"
      />

      <button onClick={addGrocItem}>Add</button>

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

            <button onClick={() => deletegrocitem(index)}>
              Delete Grocery
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Grocery;
