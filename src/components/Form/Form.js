import "./Form.css";
function Form() {
  return (
    <div>
      <p>Enter your item</p>
      <input
        type="text"
        placeholder="Type something..."
        className="inputItem"
      />
      <button className="addBtn">ADD</button>
    </div>
  );
}

export default Form;
