import React, { useState } from "react";

function App() {
  const [item, setItem] = useState("A item");
  const [itemArr, setItemArr] = useState([]);

  function getItem(event) {
    const newItem = event.target.value;
    setItem(newItem);
  }

  function runItem() {
    setItemArr((preValue) => [...preValue, item]);
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={getItem} type="text" />
        <button onClick={runItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {itemArr.map((item) => {
            return <li>{item}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
