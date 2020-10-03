import React, {Component} from "react";
import CellRow from "./cellRow";
import ResultCell from "./resultCell";

class CellsGrid extends Component {
    constructor(props) {
        super(props);
        this.state = {rows: [[0, 0, 0, 0, 0, 0, 0, 0]]};
        this.onUpdate = this.onUpdate.bind(this)
    }

    addRow() {
        const currentRows = [...this.state.rows];
        currentRows.push([0, 0, 0, 0, 0, 0, 0, 0]);
        this.setState({rows: currentRows});
    }

    /**
     *
     * @param {number} rowIdx the index number of the row to choose
     * @param byte
     */
    onUpdate(rowIdx, byte){
        const currentRows = [...this.state.rows];
        currentRows[rowIdx] = byte
        this.setState({rows:currentRows})
    }

    render() {
        return (
            this.state.rows.map((row, idx) => {
                return <div className="fullRow flex">
                    <CellRow cells={row} key={idx} idx={idx} updateChange={this.onUpdate}/>
                    <ResultCell values={row} type="number"/>
                    <ResultCell values={row} type="asciiChar"/>

                </div>
            })
        )
    }
}

export default CellsGrid;