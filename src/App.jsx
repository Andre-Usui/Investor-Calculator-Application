import { useState } from "react";
import Calculator from "./components/Calculator";
import Results from "./components/Results";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1000,
    expectedReturn: 6,
    duration: 10
  })

  const inputIsValid = userInput.duration >= 1;

  function handleChange(inputIdentifier, newValue) {
    setUserInput(prevUserInput => {
      return {
        ...prevUserInput,
        [inputIdentifier]: +newValue
      }
    })
  }
  return (
    <>
      <Calculator
        userInput={userInput}
        handler={handleChange}
      />
      {inputIsValid ?
        <Results userInput={userInput} />
        :
        <p className="center">Please insert a duration greater than 0</p>}
    </>
  )
}

export default App
