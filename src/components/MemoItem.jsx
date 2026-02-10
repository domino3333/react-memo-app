import "../css/MemoItem.css";

const MemoItem = ({ id, content, date, onClickMemo}) => {
  return (
    <div className="memo-item" onClick={onClickMemo}>
      <div className="memo-header">

        <span className="memo-id">#{id}</span>
        <span className="memo-date">{date}</span>
      </div>
      <p className="memo-content">{content}</p>
    </div>
  );
};

export default MemoItem;