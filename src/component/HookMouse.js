import React, { useState, useEffect, Fragment } from 'react';

const HookMouse = () => {
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);

    const logMousePosition = (e) => {
        setX(e.clientX);
        setY(e.clientY);
    }

    useEffect(() => {
        console.log('useeffect called')
        window.addEventListener('mousemove', logMousePosition);
        return () => {
            console.log('unmount component')
            window.removeEventListener('mousemove', logMousePosition);
        }
    }, [])

    return (
        <Fragment>
            <div style={{ backgroundColor: 'silver', color: 'white', padding: 250, fontWeight: 'bold', fontSize: 40 }}>
                <p>X: {x}</p>
                <p>Y: {y}</p>
            </div>
        </Fragment>
    );
}

export default HookMouse;