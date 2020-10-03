import React, { Fragment, useState, useEffect } from 'react';

const HooksCounterFive = () => {
    const [counter, setCounter] = useState(0)
    useEffect(() => {
        document.title = `Clicked ${counter} times`
    })
    return (
        <Fragment>
            <button
                style={{ width: 400, height: 200, backgroundColor: 'green', color: 'white', fontWeight: 'bold', fontSize: 40 }}
                onClick={() => setCounter(counter + 1)}>
                {`Click ${counter} times`}</button>
        </Fragment>
    );
}

export default HooksCounterFive;