const EmptyMessage = ({ marketItems }) => {
  return <div>{marketItems.length === 0 && <i>~~~No Items to buy~~~</i>}</div>;
};
export default EmptyMessage;
