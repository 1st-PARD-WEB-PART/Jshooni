import React from "react"
import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import './Counter'


let fonts = { color: 'yellow', fontSize: '30px' }


function App() {

  return (
    <div className="App">
      <div className="black-nav">
        <div style={fonts}> Jshooni Blog</div>
      </div>

      <h3> Name : </h3>
      <input
        type="text"
      />

      <h3> Email :  </h3>
      <input
        type="text"
      />
      <h3> Message :  </h3>
      <textarea
        type="text"
      />
      <div> 
        <button className="btn"> Submit </button>
      </div>
      <div className="App">
        <Counter />
      </div>

    </div>
  );
}


export default App;