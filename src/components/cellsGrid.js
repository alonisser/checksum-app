import React, {Component} from "react";
import CellRow from "./cellRow";
import ResultCell from "./resultCell";
import ControlPlane from "./controlPlane";
import {createBinaryArrayChecksum} from "../lib/app_services/checksum_svc";

class CellsGrid extends Component {
    constructor(props) {
        super(props);
        const initialRows = [[0, 0, 0, 0, 0, 0, 0, 0]];
        this.state = {rows: initialRows, checksum: createBinaryArrayChecksum(initialRows), showChecksum: false};
        this.onUpdate = this.onUpdate.bind(this)
        this.addRow = this.addRow.bind(this)
        this.toggleChecksumDisplay = this.toggleChecksumDisplay.bind(this)
    }

    addRow() {
        const currentRows = [...this.state.rows];
        currentRows.push([0, 0, 0, 0, 0, 0, 0, 0]);
        this.setState({rows: currentRows, checksum: createBinaryArrayChecksum(currentRows)});
    }


    /**
     *
     * @param {number} rowIdx the index number of the row to choose
     * @param byte
     */
    onUpdate(rowIdx, byte) {
        const currentRows = [...this.state.rows];
        currentRows[rowIdx] = byte
        this.setState({rows: currentRows, checksum: createBinaryArrayChecksum(currentRows)})
    }

    toggleChecksumDisplay() {
        this.setState({showChecksum: !this.state.showChecksum})
    }

    render() {
        return (

            <div className="cellGrid">
                <div className="rows">
                    {this.state.rows.map((row, idx) => {
                        return <div className="fullRow flex" key={idx}>
                            <CellRow active={true} cells={row} idx={idx} updateChange={this.onUpdate}/>
                            <ResultCell values={row} type="number"/>
                            <ResultCell values={row} type="asciiChar"/>
                        </div>
                    })}
                    {this.state.checksum && this.state.showChecksum && <div className="fullRow flex">
                        <CellRow isChecksum={true} cells={this.state.checksum} active={false}/>

                    </div>
                    }
                    {
                        <ControlPlane showChecksum={this.state.showChecksum} onAddRow={this.addRow}
                                      toggleChecksumDisplay={this.toggleChecksumDisplay}/>

                    }
                </div>

            </div>

        )
    }
}

export default CellsGrid;