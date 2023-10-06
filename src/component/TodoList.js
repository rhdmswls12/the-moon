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