import { useState } from "react"


export const useCounter = (initialValue = 0) => {

    const [counter, setCounter] = useState(initialValue);
    
    const suma = () => {
        setCounter(counter + 1);
    }
    const resta = () => {
        if (counter === 0) return;
        setCounter(counter - 1);
    }
    const reset = () => {
        setCounter(initialValue);
    }

    return {
        counter,
        suma,
        resta,
        reset
    }

}