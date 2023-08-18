import React from 'react';

export default function DriverCallWaiting({ driverInfo }) {
    return (
        <div className="div_head" style={{ fontSize: '20px', textAlign: 'center' }}>
            <div className="driver_info">
                <div id="driver_name"> {driverInfo.name} 기사님</div><br />
                <div id="driver_num"><b>{driverInfo.carNumber}</b></div><br />
                <div id="driver_car">{driverInfo.carType}</div><br />
            </div>
            <div className="call_waiting">
                <b style={{ padding: '20px', border: 'solid 1px' }}>호출 대기 중...</b>
            </div>
        </div>
    );
}
