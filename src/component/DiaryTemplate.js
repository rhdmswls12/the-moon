import styled from "styled-components";
import {BsFillBookmarkFill} from 'react-icons/bs'
import DiaryHead from "./DiaryHead";
import DiaryCreate from "./DiaryCreate";

const DiaryTemplateBlock = styled.div`
  width: 512px;
  height: 768px;
  position: relative;
  background: #fff;
  border-radius: 16px 16px;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.04);
  margin: 0 auto;
  margin-bottom: 32px;
  display: flex;
  flex-direction: column;
`
const BookMark = styled.div`
  color: #38d9a9;
  &: hover {
    color: #20c997;
  }
  &: active {
    color: #fa5252;
  }
  z-index: 5;
  cursor: pointer;
  width: 80px;
  height: 80px;
  display: block;
  font-size: 60px;
  position: absolute;
  top: -20px;
  right: 20px;
`

export default function DiaryTemplate() {
  return (
    <>
      <DiaryTemplateBlock>
        <BookMark>
          <BsFillBookmarkFill/>
        </BookMark>
        <DiaryHead />
        <DiaryCreate />
      </DiaryTemplateBlock>
    </>
  )
}