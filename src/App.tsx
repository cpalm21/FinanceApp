import React, {ChangeEvent, useState} from 'react';
import logo from './logo.svg';
import './App.css';







function App() {
  
  
  const [futureValue, setFutureValue] = useState<number>(0);
  const [presentValue, setPresentValue] = useState<number>(0);
  const [numPeriods, setnumPeriods] = useState<number>(0);
  const [interestRate, setinterestRate] = useState<number>(0);
  

  function calculateFutureValue(): void{
    setFutureValue(presentValue*(1+(interestRate/100))**numPeriods);
  }

  const handlePresentValueChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPresentValue(Number(event.target.value));  // Update state with input's current value
  };

   const handleInterestRateChange = (event: ChangeEvent<HTMLInputElement>) => {
    setinterestRate(Number(event.target.value));  // Update state with input's current value
  }; 
  
  const handleNumPeriodsChange = (event: ChangeEvent<HTMLInputElement>) => {
    setnumPeriods(Number(event.target.value));  // Update state with input's current value
  };





  return (
    <div className="App">
      <div>
        Calculate Future Value 
      </div>
      <input type="number" placeholder="Enter the Present Value Here" onChange={handlePresentValueChange} />
      <input type="number"placeholder = "interest Rate %" onChange={handleInterestRateChange} />
      <input type="number"placeholder = "# periods" onChange={handleNumPeriodsChange} />
      <button onClick={calculateFutureValue}>Calculate Future Value</button>
      <div>{futureValue}</div>
    </div>
  );
}

export default App;
