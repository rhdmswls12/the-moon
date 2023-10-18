import styled from "styled-components";
import {BsFillSunFill, BsFillLightbulbFill, BsFillCalendarCheckFill, BsCloudFog2} from 'react-icons/bs'
import { Link } from "react-router-dom";
import {FaPenNib} from 'react-icons/fa6'
import cloud1 from '../img/cloud1.png'
import cloud2 from '../img/cloud2.png'
import cloud3 from '../img/cloud3.png'

const Sky = styled.div`
  width: 100%;
  height: 50vh;
  background-color: transparent;
  z-index:-3;
`
const Cloud1 = styled.img`
  width: 500px;
  height: 300px;
  position: relative;
  bottom: 100px;
  left: 100px;
  z-index: -1;
`
const Cloud2 = styled.img`
  width: 500px;
  height: 200px;
  position: relative;
  left: 250px;
  bottom: 50px;
  z-index: -2;
`
const Cloud3 = styled.img`
  width: 450px;
  height: 200px;
  position: relative;
  bottom: 130px;
  left: 0px;
  z-index: -2;
  overflow: hidden;
`
const Cloud4 = styled.img`
  width: 450px;
  height: 200px;
  position: relative;
  bottom: 70px;
  right: 20px;
`
const Bottom = styled.div`
  width: 100%;
  height: 40vh;
  background: linear-gradient(rgba(0,0,139, .5),rgba(30,144,255,.5),rgba(135, 206,235,.5),rgba(240,255, 255,.5));
  position: absolute;
  left: 0;
  bottom: -100px;
  z-index: -1;
`
const Light = styled.div`
  font-size: 50px;
  position: absolute;
  top: 30px;
  right: 30px;
  color: #FFD700;
  &:hover {
    cursor: pointer;
    color: #FF8C00;
  }
`
const TodoIcon = styled.button`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  position: absolute;
  bottom: 80px;
  right: 30px;
  font-size: 30px;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;
  border: none;
  &:hover {
    color: #fff;
    background: #1e1e22;
    cursor: pointer;
  }
`
const DiaryIcon = styled.button`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  position: absolute;
  bottom: 0;
  right: 30px;
  font-size: 30px;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;
  border: none;
  &:hover {
    color: #fff;
    background: #1e1e22;
    cursor: pointer;
  }
`
export default function Main({ toggleMode}) {
  return (
    <>
      <Light onClick={toggleMode}>
        <BsFillLightbulbFill />
      </Light>
      <Sky>
        <Cloud1 src={cloud1} />
        <Cloud2 src={cloud2} />
        <Cloud3 src={cloud3} />
        <Cloud4 src={cloud2} />
      </Sky>
      <Link to="/todo">
        <TodoIcon>
          <BsFillCalendarCheckFill />
        </TodoIcon>
      </Link>
      <Link to="/diary"> 
        <DiaryIcon>
          <FaPenNib />
        </DiaryIcon>
      </Link>
      <Bottom>
      </Bottom>
   </>
  )
}