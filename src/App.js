import React from 'react';
import './App.css';
// import CellRow from './components/cellRow';
import CellsGrid from './components/cellsGrid';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <p>
                    Example of byte protocol checksum based error checking
                </p>
                <div className="container">
                    <CellsGrid/>
                </div>
            </header>
        </div>
    );
}

export default App;
