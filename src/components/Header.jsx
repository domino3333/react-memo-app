
import '../css/Header.css'
const Header= ({setDisplay})=>{

    return(<>
        <div className='header'>
        <h1>MINOTE</h1>
        <button type="button" onClick={()=>setDisplay("create")}>+</button>
        </div>
    </>)

}

export default Header;