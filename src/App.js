import React from 'react';
import './App.css';
import CellsGrid from './components/cellsGrid';
import Explanation from "./components/explanation";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <p>
                    Example of byte protocol checksum based error checking
                </p>

            </header>
            <div className="container">
                <CellsGrid/>
            </div>
            <Explanation/>

        </div>
    );
}

export default App;
