import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import logo from '../../assets/images/logo.svg';
import './app.scss';
import Menu from '../footer';

function App() {
  return (
    <div className="App">
      <Menu />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.asd
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Reactdasd
        </a>
      </header>
    </div>
  );
}

export default App;
