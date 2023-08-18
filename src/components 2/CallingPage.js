import React, { useState, useEffect } from "react";
import axios from "axios";
import "../App.css";
import Basic_Components_top from "../Basic_Component_top";
import Basic_Component_bottom from "../Basic_Component_bottom";

export default function CallingPage() {

    const [loading, setLoading] = useState(true);
    let data = {
        arrTime : "10분",
        taxiInfo : "12X 1234"
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
            <div className="phone">
                <div className="screen">
                    <div className="basic_Components_top">
                        <Basic_Components_top />
                        <hr />
                    </div>
                <div className="div_head">
                <div>
                            <p>Arrival Time: {data.arrTime}</p>
                            <p>Taxi Info: {data.taxiInfo}</p>
                        </div>
                </div>
                <div className="basic_Components_bottom">
                    <hr />
                    <Basic_Component_bottom />
                </div>
            </div>
        </div>
        </div>
    )
}