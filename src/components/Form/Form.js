import { useState } from "react";
import "./Form.css";
function Form({ onAddItems }) {
  const [name, setName] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!name) return;
    const newItem = { id: Date.now(), name, packed: false };
    console.log(newItem);
    onAddItems(newItem);
    setName("");
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <p>Enter your item :</p>
      <input
        type="text"
        placeholder="Type something..."
        className="inputItem"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button className="addBtn">ADD</button>
    </form>
  );
}

export default Form;
