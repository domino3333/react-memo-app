import { useState } from 'react';
import '../css/CreateMemo.css'

const CreateMemo = ({addMemo,setDisplay}) => {

    //textArea를 보고 있는 state
    const[textarea,setTextArea] = useState();

    const clickCompleteButton= ()=>{
        addMemo(textarea)
        setDisplay("list");
    }

    const observeTextArea= (e)=>{
        setTextArea(e.target.value)
    }


    return (<>
        <div className="CreateMemo">
            <textarea onChange={observeTextArea} />
            <button type="button" onClick={clickCompleteButton}>완료</button>
        </div>

    </>)

}

export default CreateMemo;