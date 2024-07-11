import { useState } from "react";
import Item from "./Item";

const MarketItems = ({ marketItems, item }) => {
  let [activeItem, setactiveItem] = useState([]);

  const onBuyClick = (e, item) => {
    let newItem = [...activeItem, item];

    setactiveItem(newItem);
  };

  return (
    <div>
      <ul className="list-group">
        {marketItems.map((item) => (
          <Item
            item={item}
            key={item}
            onBuyClick={(e) => onBuyClick(e, item)}
            bought={activeItem.includes(item)}
          />
        ))}
      </ul>
    </div>
  );
};
export default MarketItems;
