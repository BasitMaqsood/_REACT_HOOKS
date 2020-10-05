import React, { Fragment, useState, useEffect } from 'react';

const IntervalHooksCounter = () => {

    const [counter, setCounter] = useState(0);

    useEffect(() => {

        // NOTE: a) If you want to call some function in useEffect define it in use effect 
        //       b) Don't forget use use prop in use-effect array

        const interval = setInterval(tick, 1000);

        return () => {
            clearInterval(interval);
        }

    }, [])

    const tick = () => {
        setCounter(prevCounter =>
            prevCounter + 1)
    }

    return (
        <Fragment>
            <div style={{ background: 'green', fontSize: 50, fontWeight: 'bold', padding: 80, color: 'white' }}>
                {counter}
            </div>
        </Fragment>
    );
}

export default IntervalHooksCounter;