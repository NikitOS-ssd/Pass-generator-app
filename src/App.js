import React, {useState} from 'react';
import './App.css';

function App() {
  const [uppercaseChecked, setUppercaseChecked] = useState(false);
  const [lowercaseChecked, setLowerChecked] = useState(false);
  const [numbersChecked, setNumbersChecked] = useState(false);
  const [symbolsChecked, setSymbolsChecked] = useState(false);

  const createPassword = () => {
    const obj = {upperCase: uppercaseChecked, lowercase: lowercaseChecked, numbers: numbersChecked, symbols: symbolsChecked};
    console.log(obj);
  }


  return (
    <div className="container">
      <h2 className="title">Password generator</h2>

      <div className="result">
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
          <img src={'https://img.icons8.com/dusk/64/000000/copy.png'} width="70%" alt="Copy Icon"/>
        </button>
      </div>

      <div className="length range_slider" data-min="4" data-max="32">
        <div className="length_title field-title" data-length="0">
          length: 
        </div>
        <input type="range" id="slider" min="4" max="32" step="1" />
      </div>

      <div className="settings">
        <span className="setting_title field-title">
          setting
        </span>
        <div className="setting">
          <input type="checkbox" id="uppercase" checked={uppercaseChecked} onChange={() => setUppercaseChecked(!uppercaseChecked)} />
          <label for="uppercase">
            Include Uppercase
          </label>
        </div>
        <div className="setting">
          <input type="checkbox" id="lowercase" checked={lowercaseChecked} onChange={() => setLowerChecked(!lowercaseChecked)} />
          <label for="lowercase">
            Include Lowercase
          </label>
        </div>
        <div className="setting">
          <input type="checkbox" id="number" checked={numbersChecked} onChange={() => setNumbersChecked(!numbersChecked)} />
          <label for="number">
            Include Numbers
          </label>
        </div>
        <div className="setting">
          <input type="checkbox" id="symbol" checked={symbolsChecked} onChange={() => setSymbolsChecked(!symbolsChecked)} />
          <label for="number">
            Include Symbols
          </label>
        </div>

        <button className="btn generate" id="generate" onClick={createPassword}>
          Generate Password
        </button>
      </div>

    </div>
  );
}

export default App;
