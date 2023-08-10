import NaverMapEx1 from "../NaverMapEx1.js";
import './CheckPath.css';

export default function SetArrivalLocation() {
    return (
        <div className="div_head">
            <div className="location">
                    <p>내 위치 &nbsp; <b>가져온 위치 정보</b></p>
            </div>
            <div className="location">
                    <p>목적지 &nbsp; <b>가져온 위치 정보</b></p>
            </div>
            <NaverMapEx1 />
            <div className="buttons">
                <button className="btn_callTaxi btn_shareHover"> 택시 부르기 </button>
            </div>
        </div>
    )
}