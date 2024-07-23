import { useState } from "react";
import Header from "./components/Header"
import UserInput from "./components/UserInput"
import Results from "./components/Results";


function App() {
  
  const [userInput, setUserInput] = useState({
    initialInvestment: 1000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 9,
  });

  const inputIsValid=userInput.duration>=1;

  function handleChange(inputIdentifier, newValues) {
    setUserInput((previousUserInput) => {
      return {
        ...previousUserInput,
        [inputIdentifier]: +newValues,
      };
    });
  }
  return (
    <>
      <Header />
      <UserInput userInput={userInput} handleChange={handleChange}/>
      {!inputIsValid && <p className="center">Please enter a duraation greater than zero.</p>}
     {inputIsValid && <Results input={userInput}/>}
    </>
  )
}

export default App
