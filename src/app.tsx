import React from 'react';
import './app.css';
import Button from 'components/buttons'; // Absolute imports

const App: React.FC = () => {
    return (
        <div className="App">
            <header className="App-header">
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.<br />
                    Running app in <i>{process.env.REACT_APP_NODE_ENV}</i> environment
                </p>
                <Button>Hello</Button>
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
    );
}

export default App;
