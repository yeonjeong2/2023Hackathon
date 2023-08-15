import React, { useState } from "react";
import "../App.css";
import Basic_Components_top from "../Basic_Component_top";
import Basic_Component_bottom from "../Basic_Component_bottom";

export default function CallingPage () {

    const [data, setData] = useState();

    return (
        <div>
            <div className="phone">
                <div className="screen">
                    <div className="basic_Components_top">
                        <Basic_Components_top />
                        <hr />
                    </div>
                    <div className="div_head">    
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