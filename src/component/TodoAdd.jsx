import { useState } from "react"
import plus from '../assets/plus.svg'


const TodoAdd = ({onCreate}) => {

  const [ content, setContent ] = useState("");

  const onChangeContent = (e) => {
    setContent(e.target.value);
  }

  const onAdd = (e) => {
    if(content === ""){
      return;
    }
    onCreate(content);
    setContent("");
  }

  const onEnter = (e) => {
    if(e.key === "Enter"){
      onAdd();
    }
  }


  

  return (
    <>
      <div className="add">
        <input type="text" placeholder="할 일을 입력하세요." onChange={onChangeContent} onKeyDown={onEnter} value={content} />
        <button className='plus-btn' type="button"><img src={plus} alt="추가" onClick={onAdd} /></button>
      </div>
    
    </>
  )
}
export default TodoAdd