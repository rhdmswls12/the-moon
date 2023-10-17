import { createContext, useContext, useReducer, useRef, useEffect } from "react";

let initialTodos = [
  {
    id: 1,
    text: '할 일을 추가하세요.',
    done: true
  }
]
const backgroundModes = [
  {
    mode: 'sunrise',
    bgColor: '#FA8072',
    textColor: '#ccc'
  },
  {
    mode: 'day',
    bgColor: '#f8f7f4',
    textColor: '#31302e'
  },
  {
    mode: 'sunset',
    bgColor: 'FF4500',
    textColor: '#31302e'
  },
  {
    mode: 'night',
    bgColor: '#1e1e22',
    textColor: '#ccc'
  }
]

function todoReducer(state, action) { // 복잡한 로직을 처리하여 상태 값을 변경 시키는 부분
  switch (action.type) {
    case 'CREATE':
      
      state = state.concat(action.todo)
      if (state[0].id == 1) {
        state.splice(0, 1)
      }
      const objString = JSON.stringify(state)
      window.localStorage.setItem('ToDoList', objString)
      
      return state 
      
    case 'TOGGLE':
      const todoString = window.localStorage.getItem('ToDoList')
      const todoJson = JSON.parse(todoString)
      const newList = state.map(item => 
      item.id === action.id ? {...item, done: !item.done} : item)
      window.localStorage.setItem('ToDoList', JSON.stringify(newList))
      return todoJson

    case 'MODIFY': 
      const todoStringForModify = window.localStorage.getItem('ToDoList')
      const todoJsonForModify = JSON.parse(todoStringForModify)
      const listForModify = state.map(item =>
      item.id === action.todo.id ? {...item, text: action.todo.text} : item)
      window.localStorage.setItem('ToDoList', JSON.stringify(listForModify))
      return todoJsonForModify

    case 'REMOVE':
      const todoStringForRemove = window.localStorage.getItem('ToDoList')
      const todoJsonForRemove = JSON.parse(todoStringForRemove)
      if (todoJsonForRemove.length > 0) {
        const filteredList = state.filter(todo => todo.id !== action.id)
        window.localStorage.setItem('ToDoList', JSON.stringify(filteredList))
        return todoJsonForRemove
      } else {
        return initialTodos
      }

    default: 
      throw new Error(`Unhandled action type: ${action.type}`)
  }
}

const TodoStateContext = createContext(); // state에 대한 context 생성
const TodoDispatchContext = createContext(); // dispatch에 대한 context 생성
const TodoNextIdContext = createContext();
const ThemeContext = createContext();

export function TodoProvider({children}) {
  const [state, dispatch] = useReducer(todoReducer, initialTodos) // useReducer 사용, 초기값은 initialTodos고 dispatch로 주문(=action)이 들어오면 todoReducer 함수를 실행하여 주문에 대한 로직을 처리해 변경된 state를 반환한다.
  const nextId = useRef(state[state.length-1].id+1);
  return ( // 컴포넌트 별로 그 바깥을 context의 Provider로 감싸던 방법을 아예 새로운 컴포넌트를 만들어 Provider들로 감싸도록 하고 children의 만든 컴포넌트들이 들어가도록 함.
    <TodoStateContext.Provider value={state}> 
      <TodoDispatchContext.Provider value={dispatch}>
        <TodoNextIdContext.Provider value={nextId}>
          <ThemeContext.Provider value={backgroundModes}>
            {children}
          </ThemeContext.Provider>
        </TodoNextIdContext.Provider>
      </TodoDispatchContext.Provider>
    </TodoStateContext.Provider>
  )
}

export function useTodoState() { //원래는 컴포넌트 내부에서 useContext를 사용해 context 값을 읽어오는데, 이 내용 자체를 custom hook으로 만듦.
  const context = useContext(TodoStateContext)
  if (!context) {
    throw new Error('Cannot find TodoProvider')
  }
  return context
}

export function useTodoDispatch() {
  const context = useContext(TodoDispatchContext)
  if (!context) {
    throw new Error('Cannot find TodoProvider')
  }
  return context
}
export function useTodoNextId() {
  const context = useContext(TodoNextIdContext)
  if (!context) {
    throw new Error('Cannot find TodoProvider')
  }
  return context
}
export function useTheme() {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('Cannot find TodoProvider')
  }
  return context
}
