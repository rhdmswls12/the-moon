import styled from "styled-components";
import DiaryHead from "./DiaryHead";
import DiaryCreate from "./DiaryCreate";
import { useDiaryDispatch } from "../TodoContext";

const DiaryTemplateBlock = styled.div`
  width: 512px;
  height: 768px;
  position: relative;
  background: #fff;
  border-radius: 16px 16px;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.04);
  margin: 0 auto;
  display: flex;
  margin-top: 100px;
  flex-direction: column;
`

export default function DiaryTemplate() {
  return (
    <>
      <DiaryTemplateBlock>
        <DiaryHead />
        <DiaryCreate />
      </DiaryTemplateBlock>
    </>
  )
}