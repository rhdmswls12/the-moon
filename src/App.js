import './App.css';
import styled, {createGlobalStyle, ThemeProvider} from 'styled-components'
import Main from './component/Main';
import TodoTemplate from './component/TodoTemplate';
import DiaryTemplate from './component/DiaryTemplate';
import {TodoProvider} from './TodoContext';
import {Routes, Route, Link} from 'react-router-dom';
import { sunriseTheme, dayTheme, sunsetTheme, nightTheme } from './theme';
import { useState } from 'react';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${props => props.theme.bgColor};
    color: ${props => props.theme.textColor};
  }
`
function App() {
  const [modes, setMode] = useState([sunriseTheme, dayTheme, sunsetTheme, nightTheme ])
  const toggleMode = () => {
    let copy = [...modes]
    copy.push(modes[0])
    copy.splice(0, 1)
    console.log(copy)
    setMode(copy)
  }

  return ( // App 내부를 Provider로 감싸서 하위의 모든 요소들이 context를 공유할 수 있도록 함.
    <div className="App"> 
      <TodoProvider>
        <ThemeProvider theme={modes[0]}>
          <GlobalStyle></GlobalStyle>
          <Routes>
            <Route path="/" element={<Main toggleMode={toggleMode}/>} />
            <Route path="/todo" element={<TodoTemplate />} />
            <Route path="/diary" element={<DiaryTemplate />} />
          </Routes>
        </ThemeProvider>
      </TodoProvider>
      
    </div>
  );
}

export default App;
