import NaverMapEx1 from "../NaverMapEx1.js";
import './DepartureLocation.css'

export default function DepartureLocation (){
    return (
        <div className="div_head">
            <div>
                <p className="par_depLocationAsk">여기 계시는 것 같아요!<br />여기로 택시를 부를까요?</p>
            </div>
            <NaverMapEx1 />
            <div className="buttons">
                <button className="btn_depLocationConfirm"> 네! 여기로 부를게요 </button>
                <button className="btn_depLocationConfirm"> 직접 설정할게요 </button>
            </div>
        </div>
    )
}