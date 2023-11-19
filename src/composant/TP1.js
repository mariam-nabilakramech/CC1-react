import React, { useState } from 'react';

const Calculatrice = () => {
  // declaration d'une state
  const [input, setInput] = useState('');

  const calculatorStyle = {
    width: '280px',
    margin: '50px auto',
    borderRadius: '50px',
    border:"solid 2px #ccc",
    boxShadow: '0 0 10px rgba(1, 5, 7, 0.5)',
    padding: '25px',
  };
  const displayStyle = {
    fontSize: '24px',
    marginBottom: '10px',
    padding: '20px',
    backgroundColor: 'white',
    border: '1px solid #ccc',
    borderRadius: '5px',
    textAlign: 'right',
  };

  const buttonContainerStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '10px',
  };

  const buttonStyle = {
    backgroundColor:"gray",
    color:"dark",
    fontSize: '18px',
    padding: '10px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontWeight: 'bold',
    
  };

  const clearButtonStyle = {
    gridColumn: 'span 2',
    backgroundColor:'red',
    color:"dark",
    fontWeight: 'bold',
    fontSize: '20px',
  };

  const handleButtonClick = (value) => {
    setInput((prevInput) => prevInput + value);
  };

  const handleCalculate = () => {
    try {
      setInput(eval(input).toString());
    } catch (error) {
      setInput('Error');
    }
  };

  const handleClear = () => {
    setInput('');
  };
  const backspace = () => {
    setInput((prevInput) => prevInput.slice(0, -1));
  };

  return (
    <div style={calculatorStyle}>
      
      <div style={displayStyle}>{input}</div>
      <div style={buttonContainerStyle}>
        {[7, 8, 9, '/'].map((value) => (
          <button key={value} style={buttonStyle} onClick={() => handleButtonClick(value)}>
            {value}
          </button>
        ))}
        {[4, 5, 6, '*'].map((value) => (
          <button key={value} style={buttonStyle} onClick={() => handleButtonClick(value)}>
            {value}
          </button>
        ))}
        {[1, 2, 3, '-'].map((value) => (
          <button key={value} style={buttonStyle} onClick={() => handleButtonClick(value)}>
            {value}
          </button>
        ))}
        {[0, '.', '=', '+'].map((value) => (
          <button key={value} style={buttonStyle} onClick={() => (value === '=' ? handleCalculate() : handleButtonClick(value))}>
            {value}
          </button>
        ))}
        <button style={clearButtonStyle}  className='btn' onClick={handleClear}>
          supprimer
        </button>
        <button style={clearButtonStyle} className='btn' onClick={backspace}>
            C
        </button>
      </div>
    </div>
  );
};

export default Calculatrice;