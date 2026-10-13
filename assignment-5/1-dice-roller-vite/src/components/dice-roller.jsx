import React from "react";
import { useState } from "react";

function DiceRoller () {
    const [dice, setDice] = useState(1);
    
    const rollDice = () => {
        const result = Math.floor(Math.random() * 6) + 1;
        setDice(result);
    }

    return (
        <div style={styles.container}>
            <h2>Dice Roller</h2>
            <div style={styles.dice}>{dice}</div>
            <button onClick={rollDice} style={styles.button}>Roll Dice</button>
        </div>
    );
}

const styles = {
    container: {
        textAlign: "center",
        marginTop: "50px",
    },

    dice: {
        fontSize: "80px",
        width: "100px",
        height: "100px",
        margin: "20px auto",
        border: "2px solid black",
        borderRadius: "10px",
        lineHeight: "100px",
        backgroundColor: "#f0f0f0",
    },

    button: {
        padding: "10px 20px",
        fontSize: "16px",
        cursor: "pointer",
    }
};

export default DiceRoller;