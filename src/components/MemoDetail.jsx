import '../css/MemoDetail.css'

const MemoDetail = ({id, content, date}) => {
  return (
    <div className="memo-detail">
      {/* 상단 헤더 */}
      <div className="memo-detail-header">
        <h1 className="memo-detail-id">#{id}</h1>
        <button className="memo-edit-btn" type="button">수정</button>
      </div>

      {/* 날짜 */}
      <div className="memo-detail-date">{date}</div>

      {/* 내용 */}
      <div className="memo-detail-content">{content}</div>

      {/* 삭제 버튼 */}
      <button className="memo-delete-btn" type="button">삭제</button>
    </div>
  )
}

export default MemoDetail

