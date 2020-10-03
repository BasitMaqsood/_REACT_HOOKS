import React, { Component, Fragment } from 'react';

class ClassCounter extends Component {
    state = {
        counter: 0,
        name: ''
    }

    componentDidMount() {
        document.title = `Clicked ${this.state.counter} times`
    }

    componentDidUpdate(prevProps, prevState) {
        // console.log('----', prevProps, prevState)
        console.log('Before Checking the Condition :::::')
        if (prevState.counter !== this.state.counter) {
            console.log('After Checking the condition')
            document.title = `Clicked ${this.state.counter} times`;
        }
    }


    handleIncrement = () => {
        this.setState(prevState => {
            return {
                counter: prevState.counter + 1
            }
        })
    }

    render() {
        const { counter, name } = this.state;
        return (
            <Fragment>
                <input type="text" value={name} onChange={(e) => {
                    this.setState({
                        name: e.target.value
                    })
                }} />
                <button
                    onClick={this.handleIncrement}
                    style={{ width: 400, height: 200, backgroundColor: 'green', color: 'white', fontWeight: 'bold', fontSize: 40 }}>
                    Increment {counter}
                </button>
            </Fragment>);
    }
}

export default ClassCounter;