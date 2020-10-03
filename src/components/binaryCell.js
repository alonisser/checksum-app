import React from "react";

function BinaryCell(props) {
    function toggle() {

        props.onToggle(props.idx)


    }

    return (
        <div className="cell" onClick={toggle}>
            {props.value}
        </div>
    )
}

export default BinaryCell;