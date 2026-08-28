import React from "react";

function ProgressBar ({progress}) {
    const containerStyle = {
        width: "100%",
        height: "20px",
        backgroundColor: "#eee",
        borderRadius: "5px",
        overflow: "hidden"
    }

    const fillerStyle = {
        height: "100%",
        width: `${progress}%`,
        backgroundColor: "#4caf50",
        textAlign: "center",
        color: "white",
        lineHeight: "20px",
        transition: "width 0.3s ease-in-out"
    }

    return (
        <div style={containerStyle}>
            <div style={fillerStyle}>{progress}%</div>
        </div>
    );
};

export default ProgressBar;