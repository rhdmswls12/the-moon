import styled from "styled-components";
import {FaPenNib} from 'react-icons/fa6'
import { Link } from "react-router-dom";
import {AiFillHome} from 'react-icons/ai'

const TodoHeadBlock = styled.div`
  padding-top: 48px;
  padding-left: 32px;
  padding-right: 32px;
  border-bottom: 1px solid #e9ecef;
  position: relative;
  text-align: left;
  h1 {
    margin: 0;
    font-size: 36px;
    color: #343a40;
    font-weight: 700;
  }
  .day {
    color: #868e96;
    font-size: 21px;
    display: flex;
    align-items: center;
    height: 50px;
  }
`
const DiaryIcon = styled.button`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  position: absolute;
  right: 30px;
  bottom: 10px;
  font-size: 20px;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #1e1e22;
  &:hover {
    color: #fff;
    background: #1e1e22;
    cursor: pointer;
  }
`
const Home = styled.div`
  color: #fff;
  &: hover {
    color: #1e1e22;
  }
  cursor: pointer;
  width: 80px;
  height: 80px;
  font-size: 60px;
  position: absolute;
  top: -54px;
  left: 20px;
`

export default function TodoHead() {
  const today = new Date();
  const dateString = today.toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
  const dayName = today.toLocaleDateString('ko-KR', {weekday: 'long'});
  return (
    <>
    <Link to="/">
        <Home>
          <AiFillHome />
        </Home>
      </Link>
    <TodoHeadBlock>
      <h1>{dateString}</h1>
      <div className="day">{dayName}</div>
      <Link to="/diary"> 
        <DiaryIcon>
          <FaPenNib />
        </DiaryIcon>
      </Link> 
    </TodoHeadBlock>
    </>
  )
}