import BinaryCell from "./binaryCell";
import React, {Component} from 'react';

const negate = (val) => {
    if (!val) {
        return 1
    } else {
        return 0
    }
}

class CellRow extends Component {
    constructor(props) {
        super(props);
        this.onCellChange = this.onCellChange.bind(this)

    }

    /**
     *
     * @param {number} idx the index number of the cell changed in the row
     */
    onCellChange(idx) {
        const newByte = [...this.props.cells].map((val, cellIndex) => {
            if (cellIndex === idx) {
                return negate(val)
            } else {
                return val
            }
        })
        if(this.props.isChecksum){
            return
        }
        this.props.updateChange(this.props.idx, newByte)

    }

    render() {
        function resolveClass(isChecksum){
            if(!isChecksum){
                return "flex cellRow"
            } else {
                return "flex cellRow checksumRow"
            }
        }
        return (<div className={resolveClass(this.props.isChecksum)} >
                {this.props.cells.map((cell, idx) => {
                    return <BinaryCell idx={idx} active={this.props.active} key={idx} onToggle={this.onCellChange} value={cell}/>

                })
                }
            </div>
        )
    }

}

export default CellRow