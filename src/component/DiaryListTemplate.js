import styled from "styled-components"
import DiaryList from "./DiaryList"
import {BsFillCalendarCheckFill} from 'react-icons/bs'
import {FaPenNib} from 'react-icons/fa6'
import {AiFillHome} from 'react-icons/ai'
import { Link } from "react-router-dom";
import { useDiaryState } from "../TodoContext"


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
    height: 50px;
  }
  .day {
    height: 50px;
    display: flex;
    align-items: center;
    color: #868e96;
    font-size: 21px;
  }
`
const DiaryListTemplateBlock = styled.div`
  width: 512px;
  height: 768px;
  position: relative;
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.04);
  margin: 0 auto;
  display: flex;
  margin-top: 100px;
  flex-direction: column;
`
const MonthBlock = styled.div`
  width: 80%;
  border-radius: 4px;
  border: 1px solid #9ACD32;
  margin: 20px auto;
  flex-direction: column;
`
const Month = styled.h3`
  padding: 20px 32px 5px;
  color: black;
  text-align: left;
  font-weight: 700;
  font-size: 30px;
`
const DiaryIcon = styled.button`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  position: absolute;
  right: 75px;
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

export default function DiaryListTemplate() {
  const diaryString = window.localStorage.getItem('Diaries')
  const diaryJson = JSON.parse(diaryString)
  
  let monthArray = diaryJson.map(diary => diary.date.split('/')[1])
  let monthSet = new Set(monthArray)
  let newMonth = [...monthSet]
  return(
    <DiaryListTemplateBlock>
      <Link to="/">
        <Home>
          <AiFillHome />
        </Home>
      </Link>
      <DiaryHeadBlock>
        <h1>Diaries</h1>
        <Link to="/diary"> 
          <DiaryIcon>
            <FaPenNib />
          </DiaryIcon>
        </Link> 
        <Link to="/todo">
          <TodoIcon>
            <BsFillCalendarCheckFill />
          </TodoIcon>
        </Link>
      </DiaryHeadBlock>
      {newMonth.map(month => (
        <MonthBlock>
        <Month>{month}월</Month>
        <DiaryList month={month}></DiaryList>
      </MonthBlock>
      ))}
      
    </DiaryListTemplateBlock>
  )
}