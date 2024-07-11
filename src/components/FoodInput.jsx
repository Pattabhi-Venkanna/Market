import styles from "./FoodInput.module.css";

const FoodInput = ({ handleInput }) => {
  return (
    <input
      type="text"
      name=""
      placeholder="Enter market item here"
      className={styles.inp}
      onKeyUp={handleInput}
    />
  );
};
export default FoodInput;
