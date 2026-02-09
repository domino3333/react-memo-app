import './App.css'
import CreateMemo from './components/CreateMemo'
import Header from './components/Header'
import List from './components/List'
import { useState, useRef } from 'react'


function App() {

  const [memo, setMemo] = useState([])
  const [mode, setMode] = useState("list")

  const idRef = useRef(1);
    
  function setDisplay(mode){

    setMode(mode);
  }

  function addMemo(content){

    const newMemo = {
      id:idRef.current++,
      content:content,
      date:new Date().getTime()
    }

    setMemo((prev)=>[...prev,newMemo])
  }
  console.log(memo);

  return (
    <>
      <div className='app'>
        {mode === "list" &&
          <>
            <Header setDisplay={setDisplay}/>
            <List />
          </>
        }
        {mode === "create" &&
          <>
            <CreateMemo addMemo={addMemo} setDisplay={setDisplay}/>
          </>
        }
      </div>
    </>
  )
}

export default App
