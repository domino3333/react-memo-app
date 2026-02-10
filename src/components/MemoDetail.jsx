


const MemoDetail = ({id,content,date}) => {
  return (<>
    <h1>{id}</h1>
    <button type="button">수정</button>
    <p>{date}</p>
    <p>{content}</p>
    <button type="button">삭제</button>
  </>)

}


export default MemoDetail
