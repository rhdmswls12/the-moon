import styled from "styled-components";
import DiaryItem from "./DiaryItem";
import { useDiaryState } from "../TodoContext";

const DiaryListBlock = styled.div`
  flex: 1;
  padding: 20px 32px;
  padding-bottom: 48px;
`

export default function DiaryList({month}) {
  const diaryString = window.localStorage.getItem('Diaries')
  const diaryJson = JSON.parse(diaryString)
  const diaries = useDiaryState()
  
  return (
    <>
    <DiaryListBlock>
    { 
    diaryJson.map(diary => (
      diary.date.split('/')[1] === month ?
      <>
        <DiaryItem 
        key={diary.id}
        id={diary.id}
        date={diary.date}
        text={diary.text}
        bookmark={diary.bookmark}
        />
      </>:null
    ))}
    </DiaryListBlock>
  </>
  )
}