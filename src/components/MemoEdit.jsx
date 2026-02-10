import '../css/MemoEdit.css'

const MemoEdit = ({ id, content, date }) => {
  return (
    <div className="memo-edit">
      {/* 메모 ID */}
      <div className="memo-edit-id">#{id}</div>

      {/* 날짜 */}
      <div className="memo-edit-date">{date}</div>

      {/* 내용 수정 */}
      <textarea
        className="memo-edit-content"
        defaultValue={content}
      />
      <button className="memo-complete-btn" type="button">완료</button>

    </div>
  )
}

export default MemoEdit;
