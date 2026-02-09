import "../css/MemoItem.css";

const MemoItem = ({ id, content, date }) => {
  return (
    <div className="memo-item">
      <div className="memo-header">
        <span className="memo-id">#{id}</span>
        <span className="memo-date">{date}</span>
      </div>
      <p className="memo-content">{content}</p>
    </div>
  );
};

export default MemoItem;