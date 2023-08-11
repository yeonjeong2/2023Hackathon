import Map from './Map'
import './DepartureLocation.css'
import { useNavigate } from "react-router-dom";
import Basic_Components_top from '../Basic_Component_top';
import Basic_Components_bottom from '../Basic_Component_bottom';

export default function DepartureLocation (){
    const movePage = useNavigate();

    function goSetArrivalLocation() {
        movePage('/arrivalLocation');
    }

    return (
        <div className="App" style={{height:'900px', width:'500px'}}>
            <div className="phone">
                <div className="screen">
                    <div className="basic_Components_top">
                        <Basic_Components_top />
                        <hr />
                    </div>

                    <div className="div_head">
                        <div>
                            <p className="par_depLocationAsk">여기 계시는 것 같아요!<br />여기로 택시를 부를까요?</p>
                        </div>
                        <Map />
                        <div className="buttons">
                            <button className="btn_depLocationConfirm" onClick={goSetArrivalLocation}> 네!<br/>여기로 부를게요 </button>
                            <button className="btn_depLocationConfirm"> 아니요,<br/>직접 설정할게요 </button>
                        </div>
                    </div>

                    <div className="basic_Components_bottom">
                        <hr />
                        <Basic_Components_bottom />
                    </div>
                </div>
            </div>
        </div>
    )
}