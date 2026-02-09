import MemoItem from "./MemoItem";
import "../css/List.css";

const List = ({ memo }) => {
  return (
    <div className="memo-list">
      {memo.map((item) => (
        <MemoItem key={item.id} {...item} />
      ))}
    </div>
  );
};

export default List;
