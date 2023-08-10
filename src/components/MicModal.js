import React from "react";
import './MicModal.css'

function MicModal ({onClose}) {
    return (
        <div className="mic_modal_head">
            <div className="mic_modal">
                <h3> // 모달 오픈과 함께 자동으로 음성인식 on </h3>
                <button onClick={onClose}>확인</button>
            </div>
        </div> 
    );
}

export default MicModal;