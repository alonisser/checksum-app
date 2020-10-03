import React from "react";

function ControlPlane(props) {

    return (
        <div className="controlPlane">
            <button onClick={props.onAddRow}>+Add byte</button>
        </div>
    )

}

export default ControlPlane