import "./Item.css";
function Item({ item }) {
  return (
    <div className="item">
      <input type="checkbox" className="checkbox" />
      <p
        className="itemText"
        style={item.packed ? { textDecoration: "line-through" } : {}}
      >
        {item.name}
      </p>
      <p className="close">✖</p>
    </div>
  );
}

export default Item;
