import './App.css';
import reset from 'styled-reset';
import styled, {keyframes, ThemeProvider, createGlobalStyle} from 'styled-components'
import Main from './component/Main';
import TodoTemplate from './component/TodoTemplate';
import DiaryTemplate from './component/DiaryTemplate';
import {TodoProvider} from './TodoContext';
import {Routes, Route, Link} from 'react-router-dom';
import { sunriseTheme, dayTheme, sunsetTheme, nightTheme } from './theme';
import { useState } from 'react';
import DiaryList from './component/DiaryList';
import DiaryListTemplate from './component/DiaryListTemplate';

const backgroundChange = keyframes`
  0% {
    background-position: 0 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0 50%;
  }
`
const GlobalStyle = createGlobalStyle`
  ${reset}
    body {
      background-image: linear-gradient(
        -45deg,
        ${props=>props.theme.bgColor[0]},
        ${props=>props.theme.bgColor[1]},
        ${props=>props.theme.bgColor[2]},
        ${props=>props.theme.bgColor[3]}
      );
      color: ${props => props.theme.textColor};
      background-repeat: no-repeat;
      position: relative;
      background-size: 400% 400%;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100vh;
      overflow: hidden;
      transition: all ease 2s 1s;
      animation : ${backgroundChange} 10s ease-in-out infinite;
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
            <Route path="/diary-list" element={<DiaryListTemplate />} />
          </Routes>
        </ThemeProvider>
      </TodoProvider>
    </div>
  );
}

export default App;
