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
                        <div className="call_info">
                            <div id='start'> 출발지 </div>
                            <div id="end"> 도착지 </div>
                            <div id="path_info"> 예상 거리, 소요 시간</div>
                        </div>
                        <div className="buttons">
                            <button id='deny'>거절</button>
                            <button id='accept'>수락</button>
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