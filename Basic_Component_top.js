import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBatteryThreeQuarters } from "@fortawesome/free-solid-svg-icons";

export default function Basic_Components_top () {
    return( 
    <div>
        <div style={{ padding:'10px 20px', lineHeight:"1%", display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
            <h4>LG U+ </h4>
            <h4> 5G </h4> 
            <FontAwesomeIcon icon={faBatteryThreeQuarters} fontSize={'25px'}></FontAwesomeIcon>
        </div>
    </div>
    )
}