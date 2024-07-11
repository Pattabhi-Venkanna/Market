import { useState } from "react";
import "./App.css";
import Container from "./components/Container";
import EmptyMessage from "./components/EmptyMessage";
import FoodInput from "./components/FoodInput";
import MarketItems from "./components/MarketItems";

function App() {
  let [marketItems, setMarketItems] = useState(["Milk"]);
  const handleInput = (event) => {
    if (event.key === "Enter") {
      let newItem = [...marketItems, event.target.value];
      event.target.value = "";
      setMarketItems(newItem);
    }
  };
  return (
    <>
      <Container>
        <h1>Market</h1>
        <FoodInput handleInput={handleInput} />
        <EmptyMessage marketItems={marketItems} />
        <MarketItems marketItems={marketItems} />
      </Container>
    </>
  );
}
export default App;
