import Basic_Components_top from './Basic_Component_top';
import Basic_Components_bottom from './Basic_Component_bottom';
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function DriverCallWaiting() {
    // const [isDataReceived, setIsDataReceived] = useState(false);
    const [driverInfo, setDriverInfo] = useState({
        name: "",
        phone: "",
        carNumber: "",
        carType: ""
    });
    // const navigate = useNavigate();

    useEffect(() => {
        axios.get('/api/taxiDriver')
            .then(response => {
                const data = response.data;
                console.log('Received data:', data);
                setDriverInfo(data);

                // if (data){
                //     setIsDataReceived(true);
                // }
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }, []);

    // useEffect(() => {
    //     if (isDataReceived) {
    //         navigate('/drivermain');
    //     }
    // }, [isDataReceived]);


    return (
        <div className="div_head" style={{ fontSize: "20px", textAlign: "center" }}>
            <div className="driver_info">
                <div id="driver_name"> {driverInfo.name} 기사님</div><br />
                <div id="driver_num"><b>{driverInfo.carNumber}</b></div><br />
                <div id="driver_car">{driverInfo.carType}</div><br />
            </div>
            <div className="call_waiting">
                <b style={{ padding: "20px", border: "solid 1px" }}>호출 대기 중...</b>
            </div>
        </div>

    );
}