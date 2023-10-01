import "./App.css";
import Form from "./components/Form/Form";
import Header from "./components/Header/Header";
import Line from "./components/Line/Line";
import PackingList from "./components/PackingList/PackingList";
function App() {
  return (
    <div className="App">
      <Header />
      <Line />
      <Form />
      <Line />
      <PackingList />
    </div>
  );
}

export default App;
