import React, { Component, Fragment } from 'react';

class ClassCounter extends Component {
    state = {
        counter: 0,
        name: 'Basit Maqsood'
    }

    handleIncrement = () => {
        this.setState(prevState => {
            return {
                counter: prevState.counter + 1
            }
        })
    }

    render() {
        const { counter } = this.state;
        return (
            <Fragment>
                <button
                    onClick={this.handleIncrement}
                    style={{ width: 400, height: 200, backgroundColor: 'green', color: 'white', fontWeight: 'bold', fontSize: 40 }}>
                    Increment {counter}
                </button>
            </Fragment>);
    }
}

export default ClassCounter;