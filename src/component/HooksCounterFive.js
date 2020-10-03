import React, { Fragment, useState, useEffect } from 'react';

const HooksCounterFive = () => {
    const [counter, setCounter] = useState(0);
    const [name, setName] = useState('')
    useEffect(() => {
        console.log('Counter Value Updated ::: ');
        document.title = `Clicked ${counter} times`
    }, [counter])
    return (
        <Fragment>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            <button
                style={{ width: 400, height: 200, backgroundColor: 'green', color: 'white', fontWeight: 'bold', fontSize: 40 }}
                onClick={() => setCounter(counter + 1)}>
                {`Click ${counter} times`}</button>
        </Fragment>
    );
}

export default HooksCounterFive;