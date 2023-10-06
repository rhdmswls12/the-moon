import './App.css';
import styled from 'styled-components';
import Main from './component/Main';
import TodoTemplate from './component/TodoTemplate';
import DiaryTemplate from './component/DiaryTemplate';
import {TodoProvider} from './TodoContext';
import {Routes, Route, Link} from 'react-router-dom';

function App() {
  return ( // App 내부를 Provider로 감싸서 하위의 모든 요소들이 context를 공유할 수 있도록 함.
    <div className="App"> 
      <TodoProvider>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/todo" element={<TodoTemplate />} />
        <Route path="/diary" element={<DiaryTemplate />} />
      </Routes>
      </TodoProvider>
      
    </div>
  );
}

export default App;
