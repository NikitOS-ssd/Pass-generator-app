import React from 'react';
import './App.css';

function App() {
  return (
    <div className="container">
      <h2 className="title">Password generator</h2>

      <div className="result_title field-title">
        Generated password
      </div>
      <div className="result_info right">
        click to copy
      </div>
      <div className="result_info left">
        copied 
      </div>

      <div className="result_viewbox" id="result">
        click to generate
      </div>

      <button id="copy-btn">
        {/* COPY ICON */}
        {/* <img src="" alt=""/> */}
      </button>

      <div className="length range_slider" data-min="4" data-max="32">
        <div className="length_title field-title" data-length="0">
          length: 
        </div>
        <input type="range" id="slider" min="4" max="32" value="16" step="1" />
      </div>

      <div className="setting">
        <span className="setting_title field-title">
          setting
        </span>
        <div className="set">
          <input type="checkbox" id="uppercase" checked />
          <label for="uppercase">
            Include Uppercase
          </label>
        </div>
        <div className="set">
          <input type="checkbox" id="lowercase" checked />
          <label for="lowercase">
            Include Lowercase
          </label>
        </div>
        <div className="set">
          <input type="checkbox" id="number" checked />
          <label for="number">
            Include Symbols
          </label>
        </div>

        <button className="btn generate" id="generate">
          Generate Password
        </button>
      </div>

    </div>
  );
}

export default App;
