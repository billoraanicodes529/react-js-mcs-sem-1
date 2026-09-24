import { useState } from "react";

function EvenOrOdd() {
    const [num, setNum] = useState("");
    const [result, setResult] = useState("");

    const checkEvenOdd = () => {
        if (num === "") {
            setResult("Please Enter a Number!");
        } else if (num % 2 === 0) {
            setResult(`${num} is an Even Number.`);
        } else {
            setResult(`${num} is an Odd Number.`);
        }
    };

    return (
        <div>
            <h1>Even Or Odd</h1>

            <label htmlFor="num">Enter a Number: </label>

            <input
                type="number"
                id="num"
                value={num}
                onChange={(e) => setNum(e.target.value)}
            />

            <br />
            <br />

            <button type="button" onClick={checkEvenOdd}>
                Check Number
            </button>

            <h1>{result}</h1>
        </div>
    );
}

export default EvenOrOdd;
