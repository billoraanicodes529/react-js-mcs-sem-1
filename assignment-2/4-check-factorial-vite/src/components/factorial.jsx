import React, { useState } from "react";

function Factorial() {
    const [num, setNum] = useState("");
    const [result, setResult] = useState("");

    function checkFactorial(num) {
        if (num === 0 || num === 1) {
            return 1;
        }

        return num * checkFactorial(num - 1);
    }

    const handleCalculate = () => {
        const number = Number(num);

        if (number < 0 || !Number.isInteger(number)) {
            setResult("Please enter a non-negative integer");
            return;
        }

        setResult(checkFactorial(number));
    };

    return (
        <div>
            <h2>Factorial Calculator</h2>

            <input
                type="number"
                value={num}
                onChange={(e) => setNum(e.target.value)}
                placeholder="Enter a number"
            />

            <button onClick={handleCalculate}>
                Calculate
            </button>

            <h3>Number: {num}</h3>
            <h3>Factorial: {result}</h3>
        </div>
    );
}

export default Factorial;
