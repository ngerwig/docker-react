import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
    let div = <>
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>
                    Hi There you I hate you!!!!
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    </>;
    return div;
}

export default App;
