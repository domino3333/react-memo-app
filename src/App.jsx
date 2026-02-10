import './App.css'
import CreateMemo from './components/CreateMemo'
import Header from './components/Header'
import List from './components/List'
import { useState, useRef } from 'react'
import MemoDetail from './components/MemoDetail'
import MemoEdit from './components/MemoEdit'


function App() {

  const [memo, setMemo] = useState([])
  const [mode, setMode] = useState("list")
  const [selectedMemo,setSelectedMemo] = useState(null)

  const idRef = useRef(1);

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

  function clickMemo(item){
    setSelectedMemo(item)
    setMode("memoDetail")
  }

  function EditMemo(){
    
  }

  return (
    <>
      <div className='app'>
        {mode === "list" &&
          <>
            <Header setDisplay={setDisplay} />
            <List memo={memo} clickMemo={clickMemo}/>
          </>
        }
        {mode === "create" &&
          <>
            <CreateMemo addMemo={addMemo} setDisplay={setDisplay} />
          </>
        }
        {mode === "memoDetail" &&
          <>
            <MemoDetail {...selectedMemo} setDisplay={setDisplay}/>
          </>
        }
        {mode === "memoEdit" &&
          <>
            <MemoEdit {...selectedMemo}/>
          </>
        }

      </div>
    </>
  )
}

export default App
