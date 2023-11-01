import styled from "styled-components";
import {BsFillCalendarCheckFill} from 'react-icons/bs'
import { Link } from "react-router-dom";

const DiaryHeadBlock = styled.div`
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
    height: 50px;
    display: flex;
    align-items: center;
    color: #868e96;
    font-size: 21px;
  }
`
const TodoIcon = styled.button`
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

export default function DiaryHead() {
  const today = new Date();
  const dateString = today.toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
  const dayName = today.toLocaleDateString('ko-KR', {weekday: 'long'});
  return (
    <DiaryHeadBlock>
      <h1>{dateString}</h1>
      <div className="day">{dayName}</div>
      <Link to="/todo">
        <TodoIcon>
          <BsFillCalendarCheckFill />
        </TodoIcon>
      </Link>
    </DiaryHeadBlock>
  )
}