import styled from "styled-components";
import TodoItem from "./TodoItem";
import React from "react";

const TodoListBlock = styled.div`
  flex: 1;
  padding: 20px 32px;
  padding-bottom: 48px;
`
function TodoList() {
  const todoString = window.localStorage.getItem('ToDoList')
  const todoJson = JSON.parse(todoString)
  console.log(todoJson)
  return (
  <>
    <TodoListBlock>
    { 
    todoJson.map(todo => (
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
export default React.memo(TodoList)