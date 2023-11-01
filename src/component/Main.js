import styled, {keyframes} from "styled-components";
import {BsFillSunFill, BsFillLightbulbFill, BsFillCalendarCheckFill, BsCloudFog2} from 'react-icons/bs'
import { Link } from "react-router-dom";
import {FaPenNib} from 'react-icons/fa6'
import cloud1 from '../img/cloud1.png'
import cloud2 from '../img/cloud2.png'
import cloud3 from '../img/cloud3.png'
import city from '../img/city.png'
import bridge from '../img/bridge.png'

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
const IconBlock = styled.div`
  display: flex;
  width: 500px;
  height: 200px;
  gap: 10px;
  justify-content: center;
`
const TodoIcon = styled.button`
  background: transparent;
  font-size: 40px;
  outline: none;
  border: none;
  color: #e9ecef;
  &:hover {
    color: #fff;
    cursor: pointer;
  }
`
const DiaryIcon = styled.button`
  background: transparent;
  font-size: 40px;
  outline: none;
  border: none;
  color: #e9ecef;
  &:hover {
    color: #fff;
    cursor: pointer;
  }
`
const Bottom = styled.div`
  width: 100%;
  height: 30%;
  position: absolute;
  display: flex;
  bottom: 0;
  left: 0;
  align-items: center;
  justify-content: center;
`
const Bridge = styled.img`
  width: 50%;
  position: absolute;
  left: -60px;
  bottom: calc(100vh-100px);
  z-index: 3;
`
const City = styled.img`
  width: 80%;
  position: absolute;
  right: 0;
  bottom: calc(100vh-10px);
  z-index: 3;
`
const Window = styled.span`
  position: absolute;
  bottom: 2px;
  font-size: 10px;
  left: 10px;
  color: yellow;
`
const move = keyframes`
  0% {
    left: 500px;
  }
  100% {
    left: -50px;
  }
`
const Subway = styled.div`
  width: 150px;
  height: 7px;
  background: black;
  position: absolute;
  bottom: calc(100vh-10px);
  left: 0;
  border-radius: 10px 4px 4px 4px;
  animation: ${move} 10s 10s linear infinite;
`

export default function Main({ toggleMode}) {
  return (
    <>
      <Light onClick={toggleMode}>
        <BsFillLightbulbFill />
      </Light>
      {/* <Sky>
        <Cloud1 src={cloud1} />
        <Cloud2 src={cloud2} />
        <Cloud3 src={cloud3} />
        <Cloud4 src={cloud2} />
      </Sky> */}
      <IconBlock>
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
      </IconBlock>
      <Bottom>
      <Bridge src={bridge} />
      <Subway>
        <Window>. . . . . . . . . . . . . . . . . . . . . . . . </Window>
      </Subway>
      <City src={city} />
      </Bottom>
   </>
  )
}