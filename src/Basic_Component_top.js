import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Basic_Components_top () {
    return( 
        <div style={{ padding:'0 7px', lineHeight:"1%", display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
            <h4>LG U+ </h4>
            <h4> 5G 75% </h4>
            <FontAwesomeIcon icon="fa-solid fa-battery-three-quarters" style={{color: "#191970",}} />
        </div>
    )
}
