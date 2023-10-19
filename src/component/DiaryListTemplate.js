import styled from "styled-components"
import DiaryList from "./DiaryList"
import { useDiaryState } from "../TodoContext"


const DiaryHeadBlock = styled.div`
  padding-top: 48px;
  padding-left: 32px;
  padding-right: 32px;
  border-bottom: 1px solid #e9ecef;
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

export default function DiaryListTemplate() {
  const diaryString = window.localStorage.getItem('Diaries')
  const diaryJson = JSON.parse(diaryString)
  
  let monthArray = diaryJson.map(diary => diary.date.split('/')[1])
  let monthSet = new Set(monthArray)
  let newMonth = [...monthSet]
  return(
    <DiaryListTemplateBlock>
      <DiaryHeadBlock>
        <h1>Diaries</h1>
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