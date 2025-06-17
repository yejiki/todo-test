import Del from "../assets/del.svg"
const Todoitem = ({id , content , onDelete}) => {

  const onClickDelete = () => {
    onDelete(id);
  }

  return(
    <>
    
    <div className="item">
      <div>{content}</div>
      <button type="button" onClick={onClickDelete}>
        <img src={Del} alt="삭제" />
      </button>
    </div>

    </>
  )
}
export default Todoitem