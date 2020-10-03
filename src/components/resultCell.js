import React from "react";
import {binaryArrToValue} from '../lib/binaryHelpers';

const resolveResult = (values, resultType) => {
    if (resultType === 'number') {
        return binaryArrToValue(values)
    } else if (resultType === 'asciiChar') {
        let code = binaryArrToValue(values);
        if (code > 32) {
            return String.fromCharCode(code)
        } else {
            return "🤷"
        }
    }
}

function ResultCell(props) {
    return <div className="resultCell">{resolveResult(props.values, props.type)}</div>
}

export default ResultCell