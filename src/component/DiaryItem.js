import styled,{css} from "styled-components";
import {MdDone, MdDelete, MdOutlineCancel} from 'react-icons/md';
import {BsFillPencilFill, BsCheckLg} from 'react-icons/bs';
import {BsFillBookmarkFill} from 'react-icons/bs'
import { useDiaryDispatch } from "../TodoContext";

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
`
const BookMark = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #dee2e6;
  font-size: 24px;
  cursor: pointer;
  margin-right: 15px;
`
const DiaryItemBlock = styled.div`
  display: flex;
  align-items: center;
  padding-top: 12px;
  padding-bottom: 12px;
  background: #fff;
`
export default function DiaryItem({id, date, text, bookmark}) {
  // const [value, setValue] = useState('');
  const dispatch = useDiaryDispatch()
  const onRemove = () => dispatch({type: 'DELETE', id});

  return (
    <>
      <DiaryItemBlock>
      <BookMark>
        <BsFillBookmarkFill />
      </BookMark>
      <Text>{text}</Text>
      <Modify>
        <BsFillPencilFill />
      </Modify>
      <Remove onClick={onRemove}>
        <MdDelete />
      </Remove>
      </DiaryItemBlock>
      <Date>{date}</Date>
    </>
  )
}