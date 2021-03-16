import React, { useState, useCallback } from 'react';
const functionsCounter = new Set();
import { Redirect } from 'react-router';

const Counter = () => {

    const [count, updateCount] = useState(0);
    const [otherCount, updateOtherCount] = useState(0);

    const [ redirect, updateRedirect ] = useState(false);

    const increment = useCallback(() => {
        updateCount(count + 1);
    }, [count]);

    const decrement = useCallback(() => {
        updateCount(count - 1);
    }, [count]);

    const incrementOtherCounter = useCallback(() => {
        updateOtherCount(otherCount + 1);
    }, [otherCount]);

    // const increment = () => {
    //     updateCount(count + 1);
    // };

    // const decrement = () => {
    //     updateCount(count - 1);
    // };

    // const incrementOtherCounter = () => {
    //     updateOtherCount(otherCount + 1);
    // };

    functionsCounter.add(increment);
    functionsCounter.add(decrement);
    functionsCounter.add(incrementOtherCounter);

    console.log(functionsCounter);

    const handleBack = () => {
        updateRedirect(true);
    }
    
    return (
        <>
            {redirect ? <Redirect to="/" /> : null}
            <button onClick={handleBack}>Back</button>
            count: {count};
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
            <button onClick={incrementOtherCounter}>incrementOtherCounter</button>
        </>
    )
}

export default Counter;