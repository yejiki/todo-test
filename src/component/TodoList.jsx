import Todoitem from "./TodoItem"

const TodoList = ({todos , onDelete}) => {
  return (
    <>
      <div className="list">
        {todos.map(({id, content}) => {
          return <Todoitem key={id} id={id} content={content} onDelete={onDelete} />
        })}
          
      </div>
    </>
  )
}
export default TodoList
