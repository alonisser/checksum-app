import React from "react";

function ControlPlane(props) {

    return (
        <div className="controlPlane">
            <button onClick={props.onAddRow}>+Add byte</button>
            {!props.showChecksum && <button onClick={props.toggleChecksumDisplay}>Show checksum</button>}
            {props.showChecksum && <button onClick={props.toggleChecksumDisplay}>Hide checksum</button>}


        </div>
    )

}

export default ControlPlane