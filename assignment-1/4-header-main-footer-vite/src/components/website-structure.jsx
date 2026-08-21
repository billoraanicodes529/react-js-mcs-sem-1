import React from "react";
import "./website-structure.css"

function WebsiteStructure() {
    return (
    <div className="grid-main-box">
        <div id="header" className="grid-item">Header</div>
        <div id="main-column-1" className="grid-item">Column-1</div>
        <div id="main-column-2" className="grid-item">Column-2</div>
        <div id="main-column-3" className="grid-item">Column-3</div>
        <div id="footer" className="grid-item">Footer</div>
    </div>       
    )
}

export default WebsiteStructure;