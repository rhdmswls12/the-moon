// import styled,{css} from "styled-components";
// import {MdDone, MdDelete, MdOutlineCancel} from 'react-icons/md';
// import {BsFillPencilFill, BsCheckLg} from 'react-icons/bs';

// const Text = styled.div`
//   flex: 1;
//   font-size: 21px;
//   color: #495057;
//   text-align: left;
//   ${props => 
//     props.done &&
//     css`
//       color: #ced4da;
//     `}
// `
// const Modify = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   margin-right: 10px;
//   color: #dee2e6;
//   font-size: 24px;
//   cursor: pointer;
//   &:hover {
//     color: #ADFF2F;
//   }
//   display: none;
// `
// const Finish = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   margin-right: 10px;
//   color: #dee2e6;
//   font-size: 30px;
//   cursor: pointer;
//   &:hover {
//     color: #20c997;
//   }
//   display: none;
// `
// const Cancel = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   margin-right: 10px;
//   color: #dee2e6;
//   font-size: 30px;
//   cursor: pointer;
//   &:hover {
//     color: #fa5252;
//   }
//   display: none;
// `
// const Remove = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   color: #dee2e6;
//   font-size: 24px;
//   cursor: pointer;
//   &:hover {
//     color: #FF6347;
//   }
//   display: none;
// `
// const DiaryItemBlock = styled.div`
//   display: flex;
//   align-items: center;
//   padding-top: 12px;
//   padding-bottom: 12px;
//   &:hover {
//     ${Modify} {
//       display: block;
//     }
//     ${Remove} {
//       display: block;
//     }
//     ${Finish} {
//       display: block;
//     }
//     ${Cancel} {
//       display: block;
//     }
//   }
// `
// export default function DiaryItem({id, date, text, bookmark}) {
//   return (
//     <DiaryItemBlock>
//       <Text>{text}</Text>
//     </DiaryItemBlock>
//   )
// }