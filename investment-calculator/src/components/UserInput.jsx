export default function UserInput({ handleChange, userInput }) {

    return (
        <section id='user-input'>
            <div className='input-group'>
                <p>
                    <label>Initial Investment</label>
                    <input type="number" value={userInput.initialInvestment} required onChange={(event) => handleChange('initialInvestment', event.target.value)} />
                </p>
                <p>
                    <label>Annual Investment</label>
                    <input type="number" value={userInput.annualInvestment} required onChange={(event) => handleChange('annualInvestment', event.target.value)} />
                </p>
            </div>
            <div className='input-group'>
                <p>
                    <label>Expected Return</label>
                    <input type="number" value={userInput.expectedReturn} required onChange={(event) => handleChange('expectedReturn', event.target.value)} />
                </p>
                <p>
                    <label>Duration</label>
                    <input type="number" value={userInput.duration} required onChange={(event) => handleChange('duration', event.target.value)} />
                </p>
            </div>
        </section>
    );
}