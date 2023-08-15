
import Basic_Components_top from '../Basic_Component_top';
import Basic_Components_bottom from '../Basic_Component_bottom';

export default function DriverCallWaiting() {
    return (
        <div className="App" style={{height:'900px', width:'500px'}}>
            <div className="phone">
                <div className="screen">
                    <div className="basic_Components_top">
                        <Basic_Components_top />
                        <hr />
                    </div>

                    <div className="div_head"> 
                        <div className="driver_info">
                            <div id='driver_pic'> <img>bring driver pic here..~</img> </div>
                            <div id="driver_name">bring name here..~</div>
                            <div id="driver_num"><b>bring number here..~</b></div>
                            <div id="driver_car">bring car type here..~</div>
                        </div>
                        <div className="call_waiting">
                            호출 대기 중...
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
