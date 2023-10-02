import { useState } from "react";
import "./App.css";
import Form from "./components/Form/Form";
import Header from "./components/Header/Header";
import Line from "./components/Line/Line";
import PackingList from "./components/PackingList/PackingList";

function App() {
  const [items, setItems] = useState([]);
  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }
  function handleDeleteItems(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  return (
    <div className="App">
      <Header />
      <Line />
      <Form onAddItems={handleAddItems} />
      <Line />
      <PackingList items={items} onDeleteItem={handleDeleteItems} />
    </div>
  );
}

export default App;
