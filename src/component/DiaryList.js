// import styled from "styled-components";
// import DiaryItem from "./DiaryItem";

// const DiaryListBlock = styled.div`
//   flex: 1;
//   padding: 20px 32px;
//   padding-bottom: 48px;
// `
// export default function DiaryList() {
//   const diaryString = window.localStorage.getItem('Diaries')
//   const diaryJson = JSON.parse(diaryString)
//   return (
//     <>
//     <DiaryListBlock>
//     { 
//     diaryJson.map(diary => (
//       <DiaryItem 
//       key={diary.id}
//       id={diary.id}
//       date={diary.date}
//       text={diary.text}
//       bookmark={diary.bookmark}
//       />
//     ))}
//     </DiaryListBlock>
//   </>
//   )
// }