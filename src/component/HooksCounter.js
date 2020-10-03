import React, { Fragment, useState } from 'react';

const HooksCounter = () => {
    const [counter, setCounter] = useState(0)
    return (
        <Fragment>
            <button
                onClick={() => setCounter(counter + 1)}
                style={{ width: 400, height: 200, backgroundColor: 'green', color: 'white', fontWeight: 'bold', fontSize: 40 }}>
                Increment {counter}
            </button>
        </Fragment>
    );
}

export default HooksCounter;