import styled,{css} from "styled-components";
import {MdDone, MdDelete, MdOutlineCancel} from 'react-icons/md';
import {BsFillPencilFill, BsCheckLg} from 'react-icons/bs';
import {BsFillBookmarkFill} from 'react-icons/bs'
import { useDiaryDispatch } from "../TodoContext";
import React, {useState} from "react";

const Text = styled.div`
  flex: 1;
  font-size: 21px;
  color: #495057;
  text-align: left;
  ${props => 
    props.done &&
    css`
      color: #ced4da;
    `}
`
const Date = styled.div`
  font-size: 16px;
  text-align: left;
  flex: 1;
`
const Modify = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
  color: #dee2e6;
  font-size: 24px;
  cursor: pointer;
  &:hover {
    color: #ADFF2F;
  }
  display: none;
`
const Finish = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
  color: #dee2e6;
  font-size: 30px;
  cursor: pointer;
  &:hover {
    color: #20c997;
  }
`
const Cancel = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
  color: #dee2e6;
  font-size: 30px;
  cursor: pointer;
  &:hover {
    color: #fa5252;
  }
`
const Remove = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #dee2e6;
  font-size: 24px;
  cursor: pointer;
  &:hover {
    color: #FF6347;
  }
  display: none;
`
const BookMark = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #dee2e6;
  font-size: 24px;
  cursor: pointer;
  margin-right: 15px;
  ${props =>
    props.bookmark && 
    css`
      color: #fa5252;
    `}
`
const DiaryItemBlock = styled.div`
  display: flex;
  align-items: center;
  padding-top: 12px;
  padding-bottom: 12px;
  background: #fff;
  &:hover {
    ${Modify} {
      display: block;
    }
    ${Remove} {
      display: block;
    }
  }
`
const Bottom = styled.div`
  display: flex;
`
const Editing = styled.form`
textarea {
  resize: none;
  border: 1px solid #9ACD32;
  flex: 1;
  width: 130%;
  height: 100%;
  color: #495057;
  background: #fff;
  border-radius: 16px;
  position: relative;
  margin: 0 auto;
  padding: 10px;
  font-size: 16px;
  font-family: 'Nanum Myeongjo', serif;
  outline-color: #63e6be;
  &:focus {
    border: 2px solid #38d9a9;
    outline: none;
  }
}
`
function DiaryItem({id, date, text, bookmark}) {
  const [edit, setEdit] = useState(false)
  const [value, setValue] = useState('');
  const onChange = e => setValue(e.target.value);
  const onEdit = () => {
    setEdit(!edit)
    setValue(text)
  }
  const dispatch = useDiaryDispatch()
  
  const onRemove = () => dispatch({type: 'DELETE', id});
  const onUpdate = e => {
    e.preventDefault();
    dispatch({
      type: 'UPDATE',
      diary: {
        id: id,
        text: value,
        bookmark: bookmark
      }
    })
    onEdit()
  }
  return (
    <>
      <DiaryItemBlock>
      <BookMark bookmark={bookmark}>
        <BsFillBookmarkFill />
      </BookMark>
      {edit ? (
        <Editing>
          <textarea placeholder={text} value={value} onChange={onChange}></textarea>
        </Editing>
      )
    : (<Text>{text}</Text>)}
      {edit ? null
      : (<>
      <Modify onClick={onEdit}>
        <BsFillPencilFill />
      </Modify>
      <Remove onClick={onRemove}>
        <MdDelete />
      </Remove></>)}
      </DiaryItemBlock>

      {edit ? (<Bottom>
      <Date>{date}</Date>
      <Finish onClick={onUpdate}>
        <BsCheckLg />
      </Finish>
      <Cancel onClick={onEdit}>
        <MdOutlineCancel />
      </Cancel>
      </Bottom>)
      :<Bottom>
      <Date>{date}</Date>
      </Bottom>}
    </>
  )
}

export default React.memo(DiaryItem)