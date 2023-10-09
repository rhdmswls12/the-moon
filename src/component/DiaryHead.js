import styled from "styled-components";

const DiaryHeadBlock = styled.div`
  padding-top: 48px;
  padding-left: 32px;
  padding-right: 32px;
  padding-bottom: 24px;
  border-bottom: 1px solid #e9ecef;
  text-align: left;
  h1 {
    margin: 0;
    font-size: 36px;
    color: #343a40;
    font-weight: 700;
  }
  .day {
    margin-top: 4px;
    color: #868e96;
    font-size: 21px;
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
    </DiaryHeadBlock>
  )
}