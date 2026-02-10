


const MemoDetail = ({id,content,date}) => {
  return (<>
    <h1>{id}</h1>
    <button type="button">수정</button>
    <textarea name="taa" id="taa" value={date}></textarea>
    <textarea name="ta" id="ta" value={content}></textarea>
    <button type="button">삭제</button>

  </>)


}


export default MemoDetail
