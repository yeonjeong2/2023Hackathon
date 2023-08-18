import React, { useState, useEffect } from "react";
import { styled } from "styled-components";
import axios from "axios";
import { getDetailAddressFromCoords } from "./KakaoMap";

const StyledButton = styled.button`
  margin: 20px 5px;
  padding: 20px 40px;
  border-radius: 10px;
  font-size: 25px;
  border: 1px solid lightgray;
  background-color: rgb(108, 184, 85);
  border: none;
  color: white;
  &:hover {
    cursor: pointer;
  }
};`

export default function DriverCallReceive({ onAccept, onDeny, callReceiveData }) {
    const [viewReceive, setViewReceive] = useState(true);
    // const [callReceiveData, setCallReceiveData] = useState({
    //     currentX: 37.37370969101868,
    //     currentY: 126.6504968115078,
    //     destinationX: 37.4002888940747,
    //     destinationY: 126.66898577303965
    // });
    const [startAddress, setStartAddress] = useState("");
    const [endAddress, setEndAddress] = useState("");

    useEffect(() => {
        if (viewReceive) {
            getDetailAddressFromCoords(callReceiveData.currentX, callReceiveData.currentY)
                .then(address => setStartAddress(address))
                .catch(error => console.error("Error fetching start address:", error));

            getDetailAddressFromCoords(callReceiveData.destinationX, callReceiveData.destinationY)
                .then(address => setEndAddress(address))
                .catch(error => console.error("Error fetching end address:", error));
        }
    }, [callReceiveData, viewReceive]);

    return (
        <div className="div_head">
            <div className="call_info">
                <div id="start"> 출발지: {startAddress} </div><br />
                <div id="end"> 도착지: {endAddress} </div><br />
            </div>
            <div className="buttons">
                <StyledButton onClick={onDeny}>거절</StyledButton>
                <StyledButton onClick={onAccept}>수락</StyledButton>
            </div>
        </div>
    );
}