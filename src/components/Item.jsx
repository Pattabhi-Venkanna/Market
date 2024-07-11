import styles from "./Item.module.css";

const Item = ({ item, onBuyClick, bought }) => {
  return (
    <div>
      <li
        className={`list-group-item ${styles.cleanList} ${bought && "active"}`}
      >
        <span className={styles.items}>{item}</span>
        <button
          className={`btn btn-success ${styles.button}`}
          onClick={onBuyClick}
        >
          Buy
        </button>
      </li>
    </div>
  );
};
export default Item;
