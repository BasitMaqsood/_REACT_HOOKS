import React, { Fragment, useState } from 'react';
import HookMouse from './HookMouse';

const MouseContainer = () => {
    const [display, setDisplay] = useState(true);

    return (
        <Fragment>
            <button
                style={{ padding: 40 }}
                onClick={() => setDisplay(!display)}>
                Toggle
            </button>
            {display && (<HookMouse />)}
        </Fragment>
    );
}

export default MouseContainer;