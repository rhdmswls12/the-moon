import styled, {css} from "styled-components";
import {MdOutlineSaveAlt} from 'react-icons/md';
import {SiBookstack} from 'react-icons/si'
import { useState } from "react";
import { useDiaryDispatch, useDiaryNextId } from "../TodoContext";
import React from "react";
import { Link } from "react-router-dom";

const DiaryArea = styled.div`
 height: 100%;
 background: #F0F8FF;
 position: relative;
 border-radius: 16px;
`
const Diary = styled.form`
  textarea {
    resize: none;
    border: none;
    width: 448px;
    height: 550px;
    background: #fff;
    border-radius: 16px;
    position: relative;
    margin: 0 auto;
    padding: 10px;
    margin-top: 20px;
    font-size: 16px;
    font-family: 'Nanum Myeongjo', serif;
    outline-color: #63e6be;
  }
`
const Saved = styled.button`
  background: #38d9a9;
  &:hover {
    background: #63e6be;
  }
  &:active {
    background: #20c997;
  }
  z-index: 5;
  cursor: pointer;
  width: 50px;
  height: 50px;
  display: block;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  position: absolute;
  right: -90px;
  bottom: 90px;
  transform: translate(-50%, 50%);
  color: white;
  border-radius: 50%;
  border: none;
  outline: none;
`
const Upload = styled.button`
  background: #38d9a9;
  &:hover {
    background: #63e6be;
  }
  &:active {
    background: #20c997;
  }
  z-index: 5;
  cursor: pointer;
  width: 50px;
  height: 50px;
  display: block;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  position: absolute;
  right: -90px;
  bottom: 25px;
  transform: translate(-50%, 50%);
  color: white;
  border-radius: 50%;
  border: none;
  outline: none;
`

function DiaryCreate() {
  const [value, setValue] = useState('');
  const today = `${new Date().getFullYear()}/${new Date().getMonth() + 1}/${new Date().getDate()}`

  const dispatch = useDiaryDispatch();
  const nextId = useDiaryNextId();
  const onChange = e => setValue(e.target.value);
  const onSubmit = e => {
    e.preventDefault();
    dispatch({
      type: 'CREATE',
      diary: {
        id: nextId.current,
        date: today,
        text: value,
        bookmark: false
      }
    })
    setValue('')
    nextId.current += 1;
  }
  return (
    <>
      <DiaryArea>
      <Diary>
        <textarea 
        placeholder="오늘의 일기를 작성하세요."
        onChange={onChange}
        value={value}>
        </textarea>
      </Diary>
      </DiaryArea>
      <Link to="/diary-list">
        <Saved>
          <SiBookstack />
        </Saved>
      </Link>
      <Upload onClick={onSubmit}>
        <MdOutlineSaveAlt />
      </Upload>
    </>
  )
}
export default React.memo(DiaryCreate)