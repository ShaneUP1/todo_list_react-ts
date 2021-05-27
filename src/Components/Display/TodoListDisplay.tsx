import React from 'react'

interface Props {
  todoList: Array<Todo>
  clickHandler: (e: React.MouseEvent<HTMLButtonElement>) => void
}

const TodoListDisplay: React.FC<Props> = ({todoList, clickHandler}) => {
  const todoElements = todoList.map(todo => (
    
    <li>
      {todo.description}
      <button onClick={clickHandler} value={todo.description} >Completed</button>
    </li>
  ))

  return (
    <ul>
      {todoElements} 
    </ul>
  )
}

export default TodoListDisplay
