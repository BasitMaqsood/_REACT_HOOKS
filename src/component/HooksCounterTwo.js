import React, { Fragment, useState } from 'react';

const HooksCounterTwo = () => {
    const initalCounter = 0;
    const [counter, setCounter] = useState(initalCounter);
    const handleIncrementByFive = () => {
        for (let i = 0; i < 5; i++) {
            setCounter(prevCounter => + prevCounter + 1)
        }
    }
    return (
        <Fragment>
            <div style={{ fontWeight: 'bold', fontSize: 30, color: 'green' }}>
                Counter : {counter}
            </div>
            <button
                style={{ width: 200, height: 100 }}
                onClick={() => setCounter(initalCounter)}>
                Reset
            </button>
            <button
                style={{ width: 200, height: 100 }}
                onClick={() => setCounter(prevCounter => prevCounter - 1)}>
                Decrement
            </button>
            <button
                style={{ width: 200, height: 100 }}
                onClick={() => setCounter(prevCounter => prevCounter + 1)}>
                Increment
            </button>
            <button
                style={{ width: 200, height: 100 }}
                onClick={handleIncrementByFive}>
                Incremnt By 5
            </button>

        </Fragment>);
}

export default HooksCounterTwo;