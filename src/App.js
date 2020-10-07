import React from 'react';
import './App.css';
import CellsGrid from './components/cellsGrid';
import Text from "./components/text";

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
                <Text/>
            </div>


        </div>
    );
}

export default App;
