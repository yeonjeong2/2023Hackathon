// DriverCallReceive.jsx
import React, {useEffect, useState} from "react"
import { styled } from "styled-components"
import axios from "axios";

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
    const [callReceiveData, setCallReceiveData] = useState({
        currentX: "",
        currentY: "",
        destinationX: "",
        destinationY: ""
    });

    useEffect(() => {
        axios.get('/api/taxi')
            .then(response => {
                const data = response.data;
                console.log('Call data:', data);
                setCallReceiveData(data);

                // if (data){
                //     setIsDataReceived(true);
                // }
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }, []);

    const handleClick = async () => {
        try {
            await axios.get('/api/client');
            console.log('API 호출 완료');
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className="div_head">
            <div className="call_info">
                <div id='start'> 출발지 : {callReceiveData.currentX}, {callReceiveData.currentY} </div><br/>
                <div id="end"> 도착지 : {callReceiveData.destinationX}, {callReceiveData.destinationY} </div><br/>
            </div>
            <div className="buttons">
                {/*<StyledButton onClick={onDeny}>거절</StyledButton>*/}
                <StyledButton onClick={handleClick}>수락</StyledButton>
            </div>
        </div>
    )
}