import React, { Component } from 'react';
import { BrowserRouter, Route, Routes, Link, Outlet} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Signin from './main'

function Router() {
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

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/main">main</Link>
          </li>
          <li>
            <Link to="/signin">Signin</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

class App extends Component {
  render() {
    return (
/*      <div className="App">
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
*/
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route path="main" element={<HelloWorld/>}/>
                <Route path="signin" element={<Signin/>}/>
              </Route>
            </Routes>
          </BrowserRouter>
    );
  }
}

export default App;
