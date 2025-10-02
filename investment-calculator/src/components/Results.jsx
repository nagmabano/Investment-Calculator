import { calculateInvestmentResults} from "../util/investment.js";

export default function Results({userInput}) {
    const resultData = calculateInvestmentResults(userInput);
    console.log(resultData);
    
    return (
        <p>Results</p>
    );
}