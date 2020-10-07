import React, {Component} from "react";
import Explanation from "./explanation";

class Text extends Component {
    constructor(props) {
        super(props);
        this.state = {displayExplanation: false}
        this.toggleExplanation = this.toggleExplanation.bind(this)
    }

    toggleExplanation() {
        this.setState({displayExplanation: !this.state.displayExplanation})
    }

    render() {
        return (
            <div className={"text grid-item"}>
                {!this.state.displayExplanation && <div>
                    <p>
                        The problem - we move important data via bits, <br/>packaged as tcp packets over unreliable
                        network
                    </p>

                    <p>
                        Data travels through copper lines, your old router, multiple switches.<br/> overseas and under
                        oceans
                        in Optical cables.
                    </p>
                    <p>
                        Data is transmitted Via Cellular antennas and pigeons. So one must be wondering..
                    </p>
                    <p>
                        <b>How do all those bits received in the other side while not being complete jibrish?</b>
                    </p>
                </div>}
                {!this.state.displayExplanation && <button
                    onClick={this.toggleExplanation}>{"Want to learn how?"}</button>}
                {this.state.displayExplanation && <Explanation/>}
                {this.state.displayExplanation && <button
                    onClick={this.toggleExplanation}>{"enough already"}</button>}
            </div>


        )
    }

}

export default Text