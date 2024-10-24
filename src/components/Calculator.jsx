import UserInput from "./UserInput";

export default function Calculator({ userInput, handler }) {


  return (
    <section id="user-input">
      <div className="input-group">
        <UserInput
          labelName="Innitial Investment"
          onChangeInput={(e) => handler('innitialInvestment', e.target.value)}
          valueInput={userInput.initialInvestment}
        />
        <UserInput
          labelName="Annual Investment"
          onChangeInput={(e) => handler('annualInvestment', e.target.value)}
          valueInput={userInput.annualInvestment}
        />
      </div>
      <div className="input-group">
        <UserInput
          labelName="Expected Return"
          onChangeInput={(e) => handler('expectedReturn', e.target.value)}
          valueInput={userInput.expectedReturn}
        />
        <UserInput
          labelName="Duration"
          onChangeInput={(e) => handler('duration', e.target.value)}
          valueInput={userInput.duration}
        />
      </div>
    </section>
  )
}