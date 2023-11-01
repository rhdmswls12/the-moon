import styled, {css} from "styled-components";
import {MdOutlineSaveAlt} from 'react-icons/md';
import {BsFillBookmarkFill} from 'react-icons/bs'
import {SiBookstack} from 'react-icons/si'
import { useState } from "react";
import { useDiaryDispatch, useDiaryNextId } from "../TodoContext";
import React from "react";
import { Link } from "react-router-dom";
import {AiFillHome} from 'react-icons/ai'

const DiaryArea = styled.div`
 height: 100%;
 background: #F0F8FF;
 position: relative;
 border-radius: 16px;
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
  ${props =>
    props.bookmark &&
    css`
    color: #fa5252;`}
`
const Diary = styled.form`
  textarea {
    resize: none;
    border: none;
    width: 348px;
    height: 450px;
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

function DiaryCreate() {
  const [value, setValue] = useState('');
  const [bookmark, setBookmark] = useState(false)
  const today = `${new Date().getFullYear()}/${new Date().getMonth() + 1}/${new Date().getDate()}`

  const dispatch = useDiaryDispatch();
  const nextId = useDiaryNextId();
  const onBookmark = () => {
    setBookmark(!bookmark)
  }
  const onChange = e => setValue(e.target.value);
  const onSubmit = e => {
    e.preventDefault();
    dispatch({
      type: 'CREATE',
      diary: {
        id: nextId.current,
        date: today,
        text: value,
        bookmark: bookmark
      }
    })
    setValue('')
    setBookmark(false)
    nextId.current += 1;
  }
  return (
    <>
      <Link to="/">
        <Home>
          <AiFillHome />
        </Home>
      </Link>
      <BookMark bookmark={bookmark} onClick={onBookmark}>
          <BsFillBookmarkFill/>
        </BookMark>
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