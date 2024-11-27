import React from "react";
import { useState } from "react";
 
const Count = () => {
    let [total, setTotal] = useState(0);
    let [counterM, setCounterM] = useState(0);
    let [counterF, setCounterF] = useState(0);
    const addM = () =>{
        setCounterM(counterM + 1);
        setTotal(total + 1);
    }
    const addF = () => {
        setCounterF(counterF + 1);
        setTotal(total + 1);
    }
    const rmM = () => {
        if (counterM > 0){
            setCounterM(counterM - 1);
            setTotal(total -1);
        }
    }
    const rmF = () => {
        if (counterF > 0){
            setCounterF(counterF - 1);
            setTotal(total -1);
        }
        
    }

    const resetCount = () => {
        setTotal(total = 0);
        setCounterF(counterF = 0);
        setCounterM(counterM = 0);
    }

    return(
        <div>
            <h2>Total = {total} </h2>
            <button onClick={resetCount}>↻</button>
            <div>
                <h2>👨</h2>
                <h3>Homens = {counterM}</h3>
                <button onClick={addM}> + </button>
                <button onClick={rmM}> - </button>
            </div>
            <div>
                <h2>👩</h2>
                <h3>Mulheres = {counterF}</h3>
                <button onClick={addF}> + </button>
                <button onClick={rmF}> - </button>
            </div>
        </div>
    )
}

export default Count;