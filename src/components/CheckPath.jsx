import Map from './Map';
import './CheckPath.css';
import Basic_Components_top from '../Basic_Component_top';
import Basic_Components_bottom from '../Basic_Component_bottom';

export default function CheckPath() {
    return (
        <div className="App" style={{height:'900px', width:'500px'}}>
            <div className="phone">
                <div className="screen">
                    <div className="basic_Components_top">
                        <Basic_Components_top />
                        <hr />
                    </div>

                    <div className="div_head">
                        <div className="location">
                                <p>내 위치 &nbsp; <b>가져온 위치 정보</b></p>
                        </div>
                        <div className="location">
                                <p>목적지 &nbsp; <b>가져온 위치 정보</b></p>
                        </div>
                        <Map />
                        <div className="buttons">
                            <button className="btn_callTaxi btn_shareHover"> 택시 부르기 </button>
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