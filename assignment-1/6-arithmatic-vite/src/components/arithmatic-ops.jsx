import React from "react"
import { useState } from "react"

function Calculator() {
    const [num1, setNum1] = useState("");
    const [num2, setNum2] = useState("");
    const [result, setResult] = useState("");

    const addNum = () => {
        setResult(Number(num1) + Number(num2));
    }

    const subNum = () => {
        setResult(Number(num1) - Number(num2));
    }

    const multiNum = () => {
        setResult(Number(num1) * Number(num2));
    }

    const divNum = () => {
        if (Number(num2) === 0) {
            setResult("Number 2 Cannot Be Zero - 0!");
        } else {
            setResult(Number(num1) / Number(num2));
        }
    }

    return (
        <div>
            <form>
                <label htmlFor="num1">Enter Number 1: </label>

                <input type="number"
                id="num1"
                placeholder="Enter Number 1..."
                value={num1}
                onChange={(e) => {
                    setNum1(e.target.value)
                }}
                />

                <br /><br />

                <label htmlFor="num2">Enter Number 2: </label>

                <input type="number"
                id="num2"
                placeholder="Enter Number 2..."
                value={num2}
                onChange={(e) => {
                    setNum2(e.target.value)
                }}
                />

                <br /><br />

                <button type="button" onClick={addNum}>Addition</button>
                <button type="button" onClick={subNum}>Subtraction</button>
                <button type="button" onClick={multiNum}>Multiplication</button>
                <button type="button" onClick={divNum}>Division</button>

                <h3>Result: {result}</h3>

            </form>
        </div>
    )
}

export default Calculator;