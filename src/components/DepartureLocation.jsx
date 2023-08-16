import Map from './Map'
import './DepartureLocation.css'
import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import Basic_Components_top from '../Basic_Component_top';
import Basic_Components_bottom from '../Basic_Component_bottom';
const { kakao } = window;

export default function DepartureLocation() {
    const movePage = useNavigate();

    function goSetArrivalLocation() {
        movePage(`/arrivalLocation?xDep=${xDep}&yDep=${yDep}&depName=${detailAddr}`);
    }

    const [detailAddr, setDetailAddr] = useState("");
    const [xDep, setXDir] = useState('');
    const [yDep, setYDir] = useState('');

    function handleDetailAddrChange(newDetailAddr) {
        setDetailAddr(newDetailAddr);
    }
    const changeDir = (dir) => {
        setXDir(dir.getLng());
        setYDir(dir.getLat());
    }
    console.log(xDep, yDep);

    return (
        <div className="App" style={{ height: '900px', width: '500px' }}>
            <div className="phone">
                <div className="screen">
                    <div className="basic_Components_top">
                        <Basic_Components_top />
                    </div>
                    <div className="div_head">
                        <div>
                            <p className="par_depLocationAsk">어디서 출발하시나요?</p>
                        </div>
                        <Map
                            onDetailAddrChange={handleDetailAddrChange}
                            changeDir={changeDir}
                        />
                        <div className="location">
                            <p style={{ fontSize: "30px" }}>내 위치 &nbsp; <b>{detailAddr}</b></p> {/* 현 위치도 가져와야 함. 현재는 우선 '가져온 위치 정보'로 고정 */}
                        </div>
                        <div className="buttons">
                            <button className="btn_depLocationConfirm" onClick={()=> {
                                goSetArrivalLocation();
                            }}>여기로<br />부를게요</button>
                        </div>
                    </div>

                    <div className="basic_Components_bottom">

                        <Basic_Components_bottom />
                    </div>
                </div>
            </div>
        </div>
    )
}