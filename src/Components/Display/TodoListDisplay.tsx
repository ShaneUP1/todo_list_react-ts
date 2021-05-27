import React from 'react';
import styles from './TodoListDisplay.module.css';

interface Props {
  todoList: Array<Todo>
  clickHandler: (e: React.MouseEvent<HTMLButtonElement>) => void
}

const TodoListDisplay: React.FC<Props> = ({todoList, clickHandler}) => {
  const todoElements = todoList.map(todo => (
    
    <li className={styles.li}>
      {todo.description}
      <button className={styles.completeButton} onClick={clickHandler} value={todo.description} >Completed</button>
    </li>
  ))

  return (
    <ul>
      {todoElements} 
    </ul>
  )
}

export default TodoListDisplay
