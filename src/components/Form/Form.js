import { useState } from "react";
import "./Form.css";
function Form({ onAddItems }) {
  const [name, setName] = useState("");
  const [isEmpty, setIsEmpty] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    if (!name) {
      setIsEmpty(true);
      return;
    }

    const newItem = { id: Date.now(), name, packed: false };
    onAddItems(newItem);
    setName("");
    setIsEmpty(false);
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <p>Enter your item :</p>
      <input
        type="text"
        placeholder="Write here..."
        className={`inputItem ${isEmpty ? "emptyInput" : ""}`}
        value={name}
        onChange={(e) => {
          setIsEmpty(false);
          setName(e.target.value);
        }}
      />
      <button className="addBtn">ADD</button>
    </form>
  );
}

export default Form;
