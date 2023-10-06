import styled, { css } from "styled-components";
import {MdDone, MdDelete} from 'react-icons/md';
import {BsFillPencilFill} from 'react-icons/bs';
import { useTodoDispatch, useTodoState } from "../TodoContext";
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
function TodoItem({id, done, text}) {
  const todos = useTodoState()
  const dispatch = useTodoDispatch(); // dispatch context에 담긴 dispatch를 가져옴
  const onToggle = () => dispatch({type: 'TOGGLE', id}); // 가져온 dispatch를 사용하여 action은 'TOGGLE'을 전달하고 id 값 역시 객체로 묶어 전달
  const onRemove = () => dispatch({type: 'REMOVE', id});
  
  return (
    <TodoItemBlock>
      <CheckCircle done={done} onClick={onToggle}>
        {done && <MdDone />}
      </CheckCircle>
      <Text done={done}>{text}</Text>
      <Modify >
        <BsFillPencilFill />
      </Modify>
      <Remove onClick={onRemove}>
        <MdDelete />
      </Remove>
    </TodoItemBlock>
  )
}

export default React.memo(TodoItem)