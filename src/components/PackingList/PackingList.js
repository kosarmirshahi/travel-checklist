import Item from "../Item/Item";
import "./PackingList.css";
// const initial = [
//   { id: 1, name: "passport", packed: true },
//   { id: 2, name: "mug", packed: false },
//   { id: 3, name: "ticket", packed: true },
//   { id: 4, name: "bag", packed: false },
//   { id: 5, name: "charger", packed: true },
// ];
function PackingList({ items, onDeleteItem, onToggleItem }) {
  return (
    <div className="packinglist">
      <h2>list :</h2>
      <div className="items">
        {items.map((item) => (
          <Item
            item={item}
            onDeleteItem={onDeleteItem}
            onToggleItem={onToggleItem}
          />
        ))}
      </div>
    </div>
  );
}

export default PackingList;
