
import {Routes, Route, useNavigate} from "react-router-dom";
import FuturePresentValue from "./FuturePresentValue"

import './App.css';



function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="App">
      <h1>Welcome to the Finance Calculator</h1>
      <button onClick={() => navigate("/future-present-value")}>
        Future and Present Value Calculator
      </button>
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/future-present-value" element={<FuturePresentValue />} />
    </Routes>
  );
}

export default App;


