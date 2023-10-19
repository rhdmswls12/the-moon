import styled from "styled-components";
import TodoItem from "./TodoItem";
import { useTodoState } from "../TodoContext";


const TodoListBlock = styled.div`
  flex: 1;
  padding: 20px 32px;
  padding-bottom: 48px;
`
export default function TodoList() {
  const todos = useTodoState() // 컴포넌트 내부에서 useContext를 사용해 context값을 읽어오던 내용을 커스텀 hook을 통해 바로 불러옴.
                               // todos를 사용하는 부분이 없는데도 해당 코드 없으면 에러 발생함.
  const todoString = window.localStorage.getItem('ToDoList')
  const todoJson = JSON.parse(todoString)
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