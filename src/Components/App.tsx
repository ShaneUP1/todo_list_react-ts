import React, { useState } from 'react';
import TodoListDisplay from './Display/TodoListDisplay';
import InputForm from './UserForm/InputForm';
import styles from './App.module.css';


function App() {
  const [todo, setTodo] = useState<Todo>({description: '', completed: false})
  const [todoList, setTodoList] = useState<Array<Todo>>([])
  
  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTodoList([...todoList, todo])
    setTodo({description: '', completed: false})
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const value: string = e.target.value;
    setTodo({ description: value, completed: false });
  }
  
  const clickHandler = (e: React.MouseEvent<HTMLButtonElement>): void => {
    const value: string = e.currentTarget.value;
    const newTodoList = todoList.filter(todo => todo.description !== value)
    setTodoList(newTodoList)
  }

  return (
    <div className={styles.app}>
      hello world
      <InputForm description={todo.description} onSubmit={handleSubmit} onChange={handleChange}/>
      <TodoListDisplay todoList={todoList} clickHandler={clickHandler} />
    </div>
  );
}

export default App;
