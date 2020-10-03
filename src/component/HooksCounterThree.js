import React, { Fragment, useState } from 'react';

const HooksCounterThree = () => {
    const [name, setName] = useState({ firstName: '', lastName: '' })
    return (
        <Fragment>
            <form>
                <div style={{ height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'space-around' }}>
                    <input
                        style={{ width: 400, height: 40, fontSize: 20, fontWeight: 'bold' }}
                        type="text"
                        value={name.firstName}
                        onChange={(e) => setName({ ...name, firstName: e.target.value })} />
                    <input
                        style={{ width: 400, height: 40, fontSize: 20, fontWeight: 'bold' }}
                        type="text"
                        value={name.lastName}
                        onChange={(e) => setName({ ...name, lastName: e.target.value })}
                    />
                    <h2> Your Fitst Name : {name.firstName} </h2>
                    <h2> Your Last Name : {name.lastName}</h2>
                    <h3>{JSON.stringify(name)}</h3>
                </div>
            </form>
        </Fragment>);
}

export default HooksCounterThree;