import styled from "styled-components";
import {createGlobalStyle} from 'styled-components';
import {BsFillSunFill, BsFillLightbulbFill, BsFillCalendarCheckFill} from 'react-icons/bs'
import { Link } from "react-router-dom";
import {FaPenNib} from 'react-icons/fa6'

const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
`
const Light = styled.div`
  font-size: 50px;
  position: absolute;
  top: 30px;
  right: 30px;
  color: #FFD700;
  &:hover {
    cursor: pointer;
    color: #FF8C00;
  }
`
const TodoIcon = styled.button`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  position: absolute;
  bottom: 120px;
  right: 30px;
  font-size: 30px;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;
  border: none;
  &:hover {
    color: #fff;
    background: #1e1e22;
    cursor: pointer;
  }
`
const DiaryIcon = styled.button`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  position: absolute;
  bottom: 30px;
  right: 30px;
  font-size: 30px;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;
  border: none;
  &:hover {
    color: #fff;
    background: #1e1e22;
    cursor: pointer;
  }
`
export default function Main() {
  return (
    <>
      <GlobalStyle></GlobalStyle>
      <Light>
        <BsFillLightbulbFill />
      </Light>
      <Link to="/todo">
        <TodoIcon>
          <BsFillCalendarCheckFill />
        </TodoIcon>
      </Link>
      <Link to="/diary">
        <DiaryIcon>
          <FaPenNib />
        </DiaryIcon>
      </Link>
   </>
  )
}