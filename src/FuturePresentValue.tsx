import React, { ChangeEvent, useState } from "react";
import "./FuturePresentValue.css";
import { useNavigate } from "react-router-dom";

function FuturePresentValue() {
  // Inputs (shared between FV and PV calculations)
  const [presentValue, setPresentValue] = useState<number>(0);
  const [futureValue, setFutureValue] = useState<number>(0);
  const [interestRate, setInterestRate] = useState<number>(0);
  const [numPeriods, setNumPeriods] = useState<number>(0);

  // Results
  const [fvResult, setFvResult] = useState<number | null>(null);
  const [pvResult, setPvResult] = useState<number | null>(null);

  // Handlers
  const handlePresentValueChange = (e: ChangeEvent<HTMLInputElement>) =>
    setPresentValue(parseFloat(e.target.value));

  const handleFutureValueChange = (e: ChangeEvent<HTMLInputElement>) =>
    setFutureValue(parseFloat(e.target.value));

  const handleInterestRateChange = (e: ChangeEvent<HTMLInputElement>) =>
    setInterestRate(parseFloat(e.target.value));

  const handleNumPeriodsChange = (e: ChangeEvent<HTMLInputElement>) =>
    setNumPeriods(parseFloat(e.target.value));

  // Calculations
  const calculateFutureValue = () => {
    const fv = presentValue * Math.pow(1 + interestRate / 100, numPeriods);
    setFvResult(fv);
  };

  const calculatePresentValue = () => {
    const pv = futureValue / Math.pow(1 + interestRate / 100, numPeriods);
    setPvResult(pv);
  };

  const navigate = useNavigate();

  return (
    <div>
      <div className="homepage-button">
        <button onClick={() => navigate("/")}>Homepage</button>
      </div>

      {/* ---------------- FUTURE VALUE SECTION ---------------- */}
      <div className="FutureValue">
        <h2>Future Value Calculator</h2>

        <input
          type="number"
          placeholder="Present Value"
          onChange={handlePresentValueChange}
        />
        <input
          type="number"
          placeholder="Interest Rate (%)"
          onChange={handleInterestRateChange}
        />
        <input
          type="number"
          placeholder="# Periods"
          onChange={handleNumPeriodsChange}
        />

        <button onClick={calculateFutureValue}>Calculate FV</button>

        {fvResult !== null && (
          <div className="result">
            Future Value: <strong>${fvResult.toFixed(2)}</strong>
          </div>
        )}
      </div>

      {/* ---------------- PRESENT VALUE SECTION ---------------- */}
      <div className="PresentValue">
        <h2>Present Value Calculator</h2>

        <input
          type="number"
          placeholder="Future Value"
          onChange={handleFutureValueChange}
        />
        <input
          type="number"
          placeholder="Interest Rate (%)"
          onChange={handleInterestRateChange}
        />
        <input
          type="number"
          placeholder="# Periods"
          onChange={handleNumPeriodsChange}
        />

        <button onClick={calculatePresentValue}>Calculate PV</button>

        {pvResult !== null && (
          <div className="result">
            Present Value: <strong>${pvResult.toFixed(2)}</strong>
          </div>
        )}
      </div>
    </div>
  );
}

export default FuturePresentValue;
