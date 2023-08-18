import React, { useEffect, useState } from "react";
import './LoginPage.css'
import Basic_Components_top from '../Basic_Component_top';
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function LoginPage () {

    const [phoneNum, setPhoneNum] = useState('');
    const [authNum, setAuthNum] = useState('');
    const [sendButtonState, setSendButtonState] = useState(true);
    const [authButtonState, setAuthButtonState] = useState(true);
    const [sendBtnText, setSendBtnText] = useState("인증번호 발송하기");

    let body = {
        phone: phoneNum,
        password: authNum
    };

    const handleLogin = async () => {
        try {
            const response = await axios.post('http://3.37.217.126:8080', JSON.stringify(body), {
                headers : {
                    'Content-Type' : 'application/json'
                }
            });

            console.log(response.data);
            
            if (response.data === true) {
                // Successful login, navigate to the next page
                goDepartureLocation();
            } else {
                // Unsuccessful login, handle accordingly (e.g., show an error message)
                window.alert("인증번호가 일치하지 않습니다");
                console.error('Login failed.');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };
    
    const movePage = useNavigate();
    function goDepartureLocation() {
        movePage('/departureLocation');
    }
    useEffect (() => {
        if(phoneNum.length === 11){
            setSendButtonState(false)
        }
        else {
            setSendButtonState(true)
        }
    }, [phoneNum]);

    useEffect (() => {
        if(authNum.length === 6){
            setAuthButtonState(false)
        }
        else {
            setAuthButtonState(true)
        }
    }, [authNum]);

    const handleClick = (e) => {
        e.preventDefault();
        setSendBtnText("인증번호 다시 발송하기");
    }

    return (

        <div className="App" style={{ height: '900px', width: '500px' }}>
            <div className="phone">
                <div className="screen">
                    <div className="basic_Components_top">
                        <Basic_Components_top />
        <div className="login_head">
            <div className="logo"></div>
            <input className="input"
                value={phoneNum}
                placeholder="전화번호" 
                onChange={(e)=>{
                    setPhoneNum(e.target.value)
                }} maxLength={11}
            />
            {sendButtonState ? null : <button className="sendBtn"
                disabled={sendButtonState}
                onClick={handleClick}> {sendBtnText} 
                </button>}
            {
            <input className="input"
                value={authNum}
                placeholder="인증번호"
                onChange={(e)=>{
                    setAuthNum(e.target.value)
                }}
                maxLength={6}
            ></input> }
            {(!authButtonState&& !sendButtonState) ? <button className="sendBtn"
                disabled={authButtonState} onClick={handleLogin}
                > {'로그인하기'} 
            </button> : null}
        </div>

        </div></div></div></div>
    );
}