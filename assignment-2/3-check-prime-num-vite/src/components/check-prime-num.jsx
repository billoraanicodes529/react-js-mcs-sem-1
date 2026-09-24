import { useState } from "react";

function PrimeNum() {
    const [num, setNum] = useState("");
    const [result, setResult] = useState("");

    const checkPrime = () => {
        const n = Number(num);
        
        if (isNaN(n) || !Number.isInteger(n) || n <= 1) {
            setResult("Not a Prime Number (must be an integer > 1)");
            return;
        }

        for (let i = 2; i <= Math.sqrt(n); i++) {
            if (n % i === 0) {
                setResult("Not a Prime Number");
                return;
            }
        }
        
        setResult("Prime Number");
    };

    return (
        <div>
            <h1>Check Prime Number</h1>
            
            <label htmlFor="num">Enter a Number: </label>
            <input 
                type="number" 
                id="num" 
                value={num} 
                onChange={(e) => setNum(e.target.value)} 
            />
            
            <br /><br />
            <button type="button" onClick={checkPrime}>Check Prime Number?</button>
            <br /><br />
            <h2>{result}</h2>
        </div>
    );
}

export default PrimeNum;