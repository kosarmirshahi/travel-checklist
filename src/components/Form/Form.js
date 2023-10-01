import "./Form.css";
function Form() {
  return (
    <form className="form">
      <p>Enter your item :</p>
      <input
        type="text"
        placeholder="Type something..."
        className="inputItem"
      />
      <button className="addBtn">ADD</button>
    </form>
  );
}

export default Form;
