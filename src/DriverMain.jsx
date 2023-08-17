// DriverMain.jsx
import Basic_Components_top from "./Basic_Component_top";
import Basic_Components_bottom from './Basic_Component_bottom';
import { useState } from 'react';
import DriverCallReceive from './DriverCallReceive';
import DriverCallWaiting from "./DriverCallWaiting";

export default function DriverMain() {
    const [viewReceive, setViewReceive] = useState(true);

    return (
        <div className="App" style={{ height: '900px', width: '500px' }}>
            <div className="phone">
                <div className="screen">
                    <div className="basic_Components_top">
                        <Basic_Components_top />
                        <hr />
                    </div>

                    <div className="mainComponentWrapper">
                        {viewReceive ? (
                            <DriverCallWaiting onAccept={() => setViewReceive(false)}/>
                        ) : (
                            <iframe src="/test.html" title="External Map" style={{
                                marginLeft: '6px',
                                width: '460px',
                                height: '800px',
                                border: 'none'
                            }}></iframe>
                        )}
                    </div>

                    <div className="basic_Components_bottom">
                        <Basic_Components_bottom />
                    </div>
                </div>
            </div>
        </div>
    )
}
