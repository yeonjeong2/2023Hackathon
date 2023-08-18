import React, { useState, useEffect } from "react";
import axios from "axios";
import "../App.css";
import Basic_Components_top from "../Basic_Component_top";
import Basic_Component_bottom from "../Basic_Component_bottom";
import './CallingPage.css';

export default function CallingPage() {

    const [loading, setLoading] = useState(true);
    let data = {
        arrTime : "10분",
        taxiNum : "인천 12가 1234",
        name : "박민석",
        carType: "제네시스 블랙",
        phoneNum : "010-1234-5678"
    };

    console.log(data.arrTime, data.taxiInfo);

    /*useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://server.msinu.net:8080');
                //setData(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
                setLoading(false);
            }
        };

        fetchData();
    }, []);
// return 부분
    {loading ? (
                        <div>
                            <p  style={{fontSize:"30px"}}>Calling a taxi...</p>
                        </div>
                    ) : data ? (
                        <div>
                            <p>Arrival Time: {data.arrTime}</p>
                            <p>Taxi Info: {data.taxiInfo}</p>
                        </div>
                    ) : (
                        <p style={{fontSize:"30px"}}>Failed to fetch data.</p>
                    )}
 
*/
    return (
        <div>
            <div className="App" style={{height:'900px', width:'500px'}}>
            <div className="phone">
                <div className="screen">
                    <div className="basic_Components_top">
                        <Basic_Components_top />
                        
                    </div>
                <div className="div_head">
                <div>
                    <div className="profile_info">
                            <div className="profile"></div>
                            <div className="name"> {data.name} 기사님</div>
                            <div className="phone_number"> {data.phoneNum}</div>
                    </div>
                    <div className="car_info">
                            <div className="car_number">{data.taxiNum}</div>
                            <div className="car_type">{data.carType}</div>
                    </div>
                    
                            <div className="arr_time">{data.arrTime} 뒤 도착 예정...</div>
                        </div>
                </div>
                <div className="basic_Components_bottom">
                   
                    <Basic_Component_bottom />
                </div>
            </div>
        </div>
        </div>
        </div>
    )
}


