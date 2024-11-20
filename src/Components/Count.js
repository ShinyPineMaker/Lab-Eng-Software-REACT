import React from "react";
import { useState } from "react";
 
const Count = () => {
    const [total, setTotal] = useState(0);
    const [counterM, setCounterM] = useState(0);
    const [counterF, setCounterF] = useState(0);
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

    return(
        <div>
            <h2>Total = {total} </h2>
            <div>
                <h3>Homens = {counterM}</h3>
                <button onClick={addM}> + </button>
                <button onClick={rmM}> - </button>
            </div>
            <div>
                <h3>Mulheres = {counterF}</h3>
                <button onClick={addF}> + </button>
                <button onClick={rmF}> - </button>
            </div>
        </div>
    )
}

export default Count;