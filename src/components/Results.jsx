import { calculateInvestmentResults, formatter } from "../util/investment";

export default function Results({ userInput }) {
  const result = calculateInvestmentResults(userInput);
  console.log(result);
  return (
    <>
      <table id="result">


        <thead>
          <tr>
            <th>Year</th>
            <th>Investiment Value</th>
            <th>Interest (Year)</th>
            <th>Total Interest </th>
            <th>Invested Capital</th>
          </tr>
        </thead>
        <tbody>
          {result.map(item => {
            const totalInterest = item.valueEndOfYear - item.annualInvestment * item.year - userInput.initialInvestment;
            const totalAmountInvested = item.valueEndOfYear - totalInterest;

            return (
              <tr key={item.year}>
                <td>{item.year}</td>
                <td>{formatter.format(item.valueEndOfYear)}</td>
                <td>{formatter.format(item.interest)}</td>
                <td>{formatter.format(totalInterest)}</td>
                <td>{formatter.format(totalAmountInvested)}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </>
  )
}