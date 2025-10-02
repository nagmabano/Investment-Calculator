import { useState } from "react";
import Header from "./components/Header.jsx";
import UserInput from "./components/UserInput.jsx";
import Results from "./components/Results.jsx";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 7,
    duration: 10,
  });

  const inputIsValid = userInput.duration >= 1

  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevInput) => {
      return {
        ...prevInput,
        [inputIdentifier]: +newValue,
      };
    });
  }

  return (
    <>
      <Header></Header>
      <UserInput handleChange={handleChange} userInput={userInput}></UserInput>
      {inputIsValid && <Results userInput={userInput} ></Results>}
      {!inputIsValid && <p className="center">Please enter a valid duration (minimum 1 year)</p>}
    </>
  );
}

export default App;
