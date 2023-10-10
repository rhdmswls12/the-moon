import styled from "styled-components";
import TodoItem from "./TodoItem";
import { useTodoState } from "../TodoContext";
import { useEffect } from "react";


const TodoListBlock = styled.div`
  flex: 1;
  padding: 20px 32px;
  padding-bottom: 48px;
`
export default function TodoList() {
  const todos = useTodoState() // 컴포넌트 내부에서 useContext를 사용해 context값을 읽어오던 내용을 커스텀 hook을 통해 바로 불러옴.
  useEffect(() => {
    if (localStorage.todo === undefined) {
      localStorage.setItem('ToDoList', JSON.stringify([]))
    }
    let todo = JSON.parse(localStorage.getItem('ToDoList'))
    console.log(todo)
  },[])
  return (
  <>
    <TodoListBlock>
    {todos.map(todo => (
      <TodoItem 
      key={todo.id}
      id={todo.id}
      text={todo.text}
      done={todo.done}
      />
    ))}
    </TodoListBlock>
  </>
  )
}