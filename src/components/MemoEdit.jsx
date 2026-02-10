import '../css/MemoEdit.css'
import { useState } from 'react';
const MemoEdit = ({ id, content, date, setMemo, setDisplay }) => {

  //수정 area를 보고있는 state
  const [textarea, setTextArea] = useState('');


  const observeTextArea = (e) => {
    setTextArea(e.target.value);
  }

  const clickCompleteButton = () => {

    setMemo((prev) => prev.map((memo) => memo.id === id ? { ...memo, content: textarea } : memo));
    setDisplay("list")
  }

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
        onChange={observeTextArea}
      />
      <button className="memo-complete-btn" type="button" onClick={clickCompleteButton}>완료</button>

    </div>
  )
}

export default MemoEdit;
