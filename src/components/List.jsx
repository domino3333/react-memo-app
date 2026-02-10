import MemoItem from "./MemoItem";
import "../css/List.css";

const List = ({ memo, clickMemo }) => {
  return (
    <div className="memo-list">
      {memo.map((item) => (
        <MemoItem key={item.id} {...item} onClickMemo={()=>clickMemo(item)}/>
      ))}
    </div>
  );
};

export default List;
