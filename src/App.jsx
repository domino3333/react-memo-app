import './App.css'
import CreateMemo from './components/CreateMemo'
import Header from './components/Header'
import List from './components/List'
import { useState, useRef, useReducer, useCallback, createContext, useMemo } from 'react'
import MemoDetail from './components/MemoDetail'
import MemoEdit from './components/MemoEdit'


function reducer(state, action) {
  switch (action.type) {
    case "CREATE":
      return [action.data, ...state];
    case "UPDATE":
      return state.map((item) =>
        item.id === action.targetId
          ? { ...item, isDone: !item.isDone }
          : item
      );
    case "DELETE":
      return state.filter((item) => item.id !== action.targetId);
    default:
      return state;
  }
}


export const TodoStateContext = createContext();
export const TodoDispatchContext = createContext();

function App() {

  const [memo, setMemo] = useState([])
  const [mode, setMode] = useState("list")
  const [selectedMemo, setSelectedMemo] = useState(null)

  const idRef = useRef(1);

  const memoizedDispatch = useMemo(() => {
    return { addMemo, clickDeleteButton };
  }, [addMemo, clickDeleteButton ]);


  function setDisplay(mode) {

    setMode(mode);
  }
  function formatDate(timestamp) {
    const d = new Date(timestamp)

    const yyyy = d.getFullYear()
    const MM = String(d.getMonth() + 1).padStart(2, "0")
    const dd = String(d.getDate()).padStart(2, "0")
    const hh = String(d.getHours()).padStart(2, "0")
    const mm = String(d.getMinutes()).padStart(2, "0")
    const ss = String(d.getSeconds()).padStart(2, "0")

    return `${yyyy}.${MM}.${dd} ${hh}:${mm}:${ss}`
  }
  function addMemo(content) {

    const newMemo = {
      id: idRef.current++,
      content: content,
      date: formatDate(new Date())
    }

    setMemo((prev) => [...prev, newMemo])
  }

  function clickMemo(item) {
    setSelectedMemo(item)
    setMode("memoDetail")
  }

  const clickDeleteButton = (id) => {
    setMemo((prev) => prev.filter((memo) => memo.id !== id))
    setMode("list")
  }



  return (
    <>
      <div className='app'>
        {mode === "list" &&
          <>
            <Header setDisplay={setDisplay} />
            <List memo={memo} clickMemo={clickMemo} />
          </>
        }
        {mode === "create" &&
          <>
            <CreateMemo addMemo={addMemo} setDisplay={setDisplay} />
          </>
        }
        {mode === "memoDetail" &&
          <>
            <MemoDetail clickDeleteButton={clickDeleteButton} {...selectedMemo} setDisplay={setDisplay} />
          </>
        }
        {mode === "memoEdit" &&
          <>
            <MemoEdit {...selectedMemo} setMemo={setMemo} setDisplay={setDisplay} />
          </>
        }

      </div>
    </>
  )
}

export default App
