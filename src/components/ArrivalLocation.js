import MicModal from './MicModal';
import './ArrivalLocation.css';
import React, { useState } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function ArrivalLocation (){

    const [micModalState, setMicModalState] = useState(false);
    const micModalOpen = () => {setMicModalState(true);}
    const micModalClose = () => {setMicModalState(false);}

    const [keyBoardModalState, setKeyBoardModalState] = useState(false);
    const keyBoardModalOpen = () => {setKeyBoardModalState(true);}
    const keyBoardModalClose = () => {setKeyBoardModalState(false);}


    return (
        <div className="div_head">
            <div>
                <p className="par_ArrLocationAsk">어디로 모실까요?</p>
            </div>
            <div className="buttons">
                <button 
                className="btn_ArrLocationConfirm"
                onClick={micModalOpen}
                >음성 인식</button>
                {micModalState ? <MicModal onClose={micModalClose} /> : null}
                <button 
                className="btn_ArrLocationConfirm"
                onClick={keyBoardModalOpen}>직접 입력</button>
                {keyBoardModalState ? <MicModal onClose={keyBoardModalClose} /> : null}
                
            </div>
        </div>
    )
}