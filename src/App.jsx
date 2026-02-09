import './App.css'
import CreateMemo from './components/CreateMemo'
import Header from './components/Header'
import List from './components/List'
import { useState, useRef } from 'react'


function App() {

  const [memo, setMemo] = useState([])
  const [mode, setMode] = useState("list")

  function setDisplay(mode){

    setMode(mode);
  }

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
            <CreateMemo/>
          </>
        }
      </div>
    </>
  )
}

export default App
