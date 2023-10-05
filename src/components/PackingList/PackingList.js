import Item from "../Item/Item";
import "./PackingList.css";

function PackingList({ items, onDeleteItem, onToggleItem }) {
  if (items.length === 0) {
    return (
      <div className="emptyList">
        <p>There is no Items. Please write something!</p>
      </div>
    );
  } else {
    return (
      <div className="packinglist">
        <h2>list :</h2>
        <div className="items">
          {items.map((item) => (
            <Item
              item={item}
              onDeleteItem={onDeleteItem}
              onToggleItem={onToggleItem}
              key={item.id}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default PackingList;
