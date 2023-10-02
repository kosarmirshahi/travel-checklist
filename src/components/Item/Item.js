import "./Item.css";
function Item({ item, onDeleteItem, onToggleItem }) {
  return (
    <div className="item">
      <input
        type="checkbox"
        className="checkbox"
        value={item.packed}
        onChange={() => onToggleItem(item.id)}
      />
      <p
        className="itemText"
        style={item.packed ? { textDecoration: "line-through" } : {}}
      >
        {item.name}
      </p>
      <button className="close" onClick={() => onDeleteItem(item.id)}>
        ✖
      </button>
    </div>
  );
}

export default Item;
