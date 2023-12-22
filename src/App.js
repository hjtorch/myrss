import React, { Component } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/main" element={<HelloWorld/>}/>
        </Routes>
      </BrowserRouter>
  );
}

function HelloWorld() {
  return <h2>hello world</h2>;
}


class Home extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Hello from Render!
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
      <App/>
    );
  }
}

export default App;
