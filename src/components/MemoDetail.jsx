import '../css/MemoDetail.css'

const MemoDetail = ({ id, content, date, setDisplay,clickDeleteButton }) => {


  return (
    <div className="memo-detail">
      {/* 상단 뒤로가기 버튼 */}
      <button className="memo-back-btn" type="button" onClick={() => setDisplay("list")}>
        ←
      </button>


      {/* 상단 헤더 */}
      <div className="memo-detail-header">
        <h1 className="memo-detail-id">#{id}</h1>
        <button className="memo-edit-btn" type="button" onClick={() => setDisplay("memoEdit")}>수정</button>
      </div>

      {/* 날짜 */}
      <div className="memo-detail-date">{date}</div>

      {/* 내용 */}
      <div className="memo-detail-content">{content}</div>

      {/* 삭제 버튼 */}
      <button className="memo-delete-btn" type="button" onClick={()=>clickDeleteButton(id)}>삭제</button>
    </div>
  )
}

export default MemoDetail
