import React from 'react';
import logo from './logo.svg';
import './App.css';
const Header = () => {
   return (
      <div className="App">
         <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
               Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
               className="App-link"
               href="https://reactjs.org"
               target="_blank"
               rel="noopener noreferrer"
            >
               Learn React
            </a>
            <h1>Premier titre</h1>
            <div>
               Premier list
               <ul>
                  <li>1-1-1-1</li>
                  <li>2-2-2-2</li>
                  <li>3-3-3-3</li>
               </ul>
            </div>
         </header>
      </div>
   );
}
export default Header;