import React, { useEffect, useState } from "react";
import './LoginPage.css'
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function LoginPage () {
    const [phoneNum, setPhoneNum] = useState('');
    const [password, setPassword] = useState('');
    const [sendButtonState, setSendButtonState] = useState(true);
    const [pwButtonState, setPwButtonState] = useState(true);
    const movePage = useNavigate();
    const [isSuccess, setIsSuccess] = useState(0);
    function goDriverMain() {
        movePage(`/drivermain`);
    };

    let body = {
        phone: phoneNum,
        password: password
    };

    const handleLogin = async () => {
        try {
            const response = await axios.post('/login', body);
            console.log(response.data);
            setIsSuccess(response.data);

            if (response.data === 1) {
                // Successful login, navigate to the next page
                goDriverMain();
            } else {
                // Unsuccessful login, handle accordingly (e.g., show an error message)
                console.error('Login failed.');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    useEffect (() => {
        if(phoneNum.length === 11){
            setSendButtonState(false)
        }
        else {
            setSendButtonState(true)
        }
    }, [phoneNum]);

    useEffect (() => {
        if(password.length !== 0){
            setPwButtonState(false)
        }
        else {
            setPwButtonState(true)
        }
    }, [password]);

    return (
        <div className="login_head">
            <input className="input"
                value={phoneNum}
                placeholder="전화번호 11자리를 입력하세요" 
                onChange={(e)=>{
                    setPhoneNum(e.target.value)
                }}
                maxLength={11}
            />
            <input className="input"
                value={password}
                placeholder="비밀번호를 입력하세요"
                onChange={(e)=>{
                    setPassword(e.target.value)
                }}
                type="password"
            ></input>
            {(!pwButtonState && !sendButtonState) ? (
                <button className="sendBtn" disabled={pwButtonState} onClick={handleLogin}>
                    {'로그인하기'}
                </button>
            ) : null}
        </div>
    );
}