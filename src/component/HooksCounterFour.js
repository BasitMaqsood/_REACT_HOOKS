import React, { Fragment, useState } from 'react';

const HooksCounterFour = () => {
    const [items, setItems] = useState([]);

    const handleInsertItem = () => {
        setItems([...items, { id: items.length, value: Math.floor(Math.random() * 10) + 1 }]);
    }
    return (
        <Fragment>
            <button onClick={handleInsertItem} style={{ width: 200, height: 80, position: 'fixed' }}>Add Item</button>
            <ul>
                {items.map(item => (<li key={item.id}
                    style={{ listStyleType: 'none', fontWeight: 'bold', fontSize: 22, color: 'white', padding: 50, marginTop: 5, backgroundColor: 'green', textAlign: 'center', alignContent: 'center' }}>
                    {item.value}</li>))}
            </ul>
        </Fragment>
    );
}

export default HooksCounterFour;