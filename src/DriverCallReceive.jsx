// DriverCallReceive.jsx
import React, {useEffect, useState} from "react"
import axios from "axios";
import { styled } from "styled-components"

const StyledButton = styled.button`
  margin: 20px 5px;
  padding: 20px 40px;
  border-radius: 10px;
  font-size: 25px;
  border: 1px solid lightgray;
  background-color: rgb(108, 184, 85);
  border: none;
  color: white;
  &:hover{
    cursor: pointer;
  }
`;

export default function DriverCallReceive({ onAccept }) {
    const [callInfo, setCallInfo] = useState({
        phone:"",
        currentX:"",
        currentY:"",
        destinationX:"",
        destinationY:""
    });

    useEffect(() => {
        axios.get("/api/taxi")
            .then(response => {
                const data=response.data;
                console.info("data", data);
                setCallInfo(data);
            })
            .catch(error => console.error("Error :",error))

    }, []);


    return (
        <div className="div_head">
            <div className="call_info">
                <div id='start'> 출발지 : {callInfo.currentX}, {callInfo.currentY}</div><br/>
                <div id="end"> 도착지 : {callInfo.destinationY}, {callInfo.destinationY}</div><br/>
                <div id="path_info"> 예상 거리 : </div>
            </div>
            <div className="buttons">
                <StyledButton>거절</StyledButton>
                <StyledButton onClick={onAccept}>수락</StyledButton>
            </div>
        </div>
    )
}
