import "./Item.css";
function Item({ item, onDeleteItem }) {
  return (
    <div className="item">
      <input
        type="checkbox"
        className="checkbox"
        value={item.packed}
        onChange={() => {}}
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
