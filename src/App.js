import React, { useState } from "react";
import "./App.css";

function App() {
  const [uppercaseChecked, setUppercaseChecked] = useState(true);
  const [result, setResult] = useState('');
  const [lowercaseChecked, setLowerChecked] = useState(false);
  const [numbersChecked, setNumbersChecked] = useState(false);
  const [symbolsChecked, setSymbolsChecked] = useState(false);
  const [passLength, setPassLength] = useState(4);
  const [canGenerate, setCanGenerate] = useState(false);

  const generatePassword = () => {
    const password = createPassword();

    setResult(password);
  };

  const copyPassword = () => {
    navigator.clipboard.writeText(result);
  }

  function secureMathRandom() {
    return (
      window.crypto.getRandomValues(new Uint32Array(1))[0] /
      (Math.pow(2, 32) - 1)
    );
  }
  const getRandomUpper = () => {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
  };
  const getRandomLower = () => {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
  };
  const getRandomNumber = () => {
    return String.fromCharCode(Math.floor(secureMathRandom() * 10) + 48);
  };
  const getRandomSymbol = () => {
    const symbols = '~!@#$%^&*()_+{}":?><;.,';
    return symbols[Math.floor(Math.random() * symbols.length)];
  };

  const createPassword = () => {
    let generatedPassword = "";

    const randomArr = {
      uppercaseChecked: getRandomLower,
      lowercaseChecked: getRandomUpper,
      numbersChecked: getRandomNumber,
      symbolsChecked: getRandomSymbol,
    };

    const typesCount = uppercaseChecked + lowercaseChecked + numbersChecked + symbolsChecked;
    const typesArr = [
      { uppercaseChecked },
      { lowercaseChecked },
      { numbersChecked },
      { symbolsChecked },
    ].filter((item) => Object.values(item)[0]);

    if (typesCount === 0) {
      return "";
    }

    for (let i = 0; i < passLength; i++) {
      typesArr.forEach((type) => {
        const funcName = Object.keys(type)[0];

        generatedPassword += randomArr[funcName]();
      });
    }

    return generatedPassword.slice(0, passLength);
  };

  React.useEffect(() => {
    const isChecked = [uppercaseChecked, lowercaseChecked, numbersChecked, symbolsChecked].some(item => item === true);
    setCanGenerate(isChecked);
  }, [uppercaseChecked, lowercaseChecked, numbersChecked, symbolsChecked])

  return (
    <div className="container">
      <h2 className="title">Password generator</h2>

      <div className="result">
        <div className="result_title field-title">Generated password</div>
        {/* <div className="result_info right">click to copy</div>
        <div className="result_info left">copied</div> */}

        <div className="result_viewbox" id="result">
          {
            result
              ? result
              : 'CLICK TO GENERATE'
          }
        </div>

        <button id="copy-btn" onClick={copyPassword}>
          <img
            src={"https://img.icons8.com/dusk/64/000000/copy.png"}
            width="70%"
            alt="Copy Icon"
          />
        </button>
      </div>

      <div className="length range_slider" data-min="4" data-max="32">
        <div className="length_title field-title" data-length="0">
          length: <span>{passLength}</span>
        </div>
        <input
          type="range"
          id="slider"
          min="4"
          value={passLength}
          onChange={(event) => setPassLength(event.target.value)}
          max="32"
          step="1"
        />
      </div>

      <div className="settings">
        <span className="setting_title field-title">setting</span>
        <div className="setting">
          <input
            type="checkbox"
            id="uppercase"
            checked={uppercaseChecked}
            onChange={(event) => setUppercaseChecked(event.target.checked)}
          />
          <label htmlFor="uppercase">Include Uppercase</label>
        </div>
        <div className="setting">
          <input
            type="checkbox"
            id="lowercase"
            checked={lowercaseChecked}
            onChange={(event) => setLowerChecked(event.target.checked)}
          />
          <label htmlFor="lowercase">Include Lowercase</label>
        </div>
        <div className="setting">
          <input
            type="checkbox"
            id="number"
            checked={numbersChecked}
            onChange={(event) => setNumbersChecked(event.target.checked)}
          />
          <label htmlFor="number">Include Numbers</label>
        </div>
        <div className="setting">
          <input
            type="checkbox"
            id="symbol"
            checked={symbolsChecked}
            onChange={(event) => setSymbolsChecked(event.target.checked)}
          />
          <label htmlFor="symbol">Include Symbols</label>
        </div>

        {
          canGenerate 
            ? <GenerateButton controller={true} controlFunction={() => generatePassword()} />
            : <GenerateButton controller={false} />
        }
      </div>
    </div>
  );
}

const GenerateButton = ({controller, controlFunction = null}) => {
  if(controller === true) {
    return (
      <button className="btn generate" id="generate" onClick={controlFunction}>
        Generate Password
      </button>
    )
  } else {
    return (
      <button className="btn generate" id="generate" style={{opacity: 0.2, cursor: 'default'}}>
        Generate Password
      </button>
    )
  }
}

export default App;
