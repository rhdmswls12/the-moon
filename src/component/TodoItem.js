import styled, { css } from "styled-components";
import {MdDone, MdDelete, MdOutlineCancel} from 'react-icons/md';
import {BsFillPencilFill, BsCheckLg} from 'react-icons/bs';
import { useTodoDispatch } from "../TodoContext";
import React, { useState } from "react";

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
  display: none;
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
  display: none;
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

const TodoItemBlock = styled.div`
  display: flex;
  align-items: center;
  padding-top: 12px;
  padding-bottom: 12px;
  &:hover {
    ${Modify} {
      display: block;
    }
    ${Remove} {
      display: block;
    }
    ${Finish} {
      display: block;
    }
    ${Cancel} {
      display: block;
    }
  }
`

const CheckCircle = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 16px;
  border: 1px solid #ced4da;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-right: 20px;
  ${props => 
    props.done &&
    css`
      border: 1px solid #9ACD32;
      color: #9ACD32;
    `}
` 

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
const Editing = styled.input`
  padding: 4px;
  flex: 1;
  margin-right: 10px;
  border-radius: 4px;
  border: 1px solid #9ACD32;
  font-size: 21px;
  color: #495057;
  text-align: left;
`

function TodoItem({id, done, text}) {
  const [edit, setEdit] = useState(false)
  const [value, setValue] = useState('');
  const onEdit = () => {setEdit(!edit)}
  
  const dispatch = useTodoDispatch(); // dispatch context에 담긴 dispatch를 가져옴
  const onToggle = () => dispatch({type: 'TOGGLE', id}); // 가져온 dispatch를 사용하여 action은 'TOGGLE'을 전달하고 id 값 역시 객체로 묶어 전달
  const onRemove = () => dispatch({type: 'REMOVE', id});
  const onChange = e => setValue(e.target.value);
  const onModify = e => {
    e.preventDefault(); //새로고침 방지
    dispatch({
      type: 'MODIFY',
      todo: {
        id: id,
        text: value,
        done: done
      }
    })
    onEdit()
  }
  return (
    <TodoItemBlock>
      <CheckCircle done={done} onClick={onToggle}>
        {done && <MdDone />}
      </CheckCircle>
      {edit ? (
      <>
        <Editing placeholder={text} value={value} onChange={onChange}>
        </Editing>
      </>
      )
      : (<Text done={done}>{text}</Text>)}
      
      {edit ? (<>
      <Finish onClick={onModify}>
        <BsCheckLg />
      </Finish>
      <Cancel>
        <MdOutlineCancel />
      </Cancel></>)
      : (<>
      <Modify onClick={onEdit}>
        <BsFillPencilFill />
      </Modify>
      <Remove onClick={onRemove}>
        <MdDelete />
      </Remove></>)}
    </TodoItemBlock>
  )
}

export default React.memo(TodoItem)