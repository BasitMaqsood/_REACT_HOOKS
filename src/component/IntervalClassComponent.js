import React, { Component, Fragment } from 'react';

class IntervalClassComponent extends Component {
    state = {
        counter: 0
    }

    componentDidMount() {
        this.interval = setInterval(this.tick, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    tick = () => {

        const { counter } = this.state;

        this.setState({
            counter: counter + 1
        })
    }

    render() {
        return (
            <Fragment>
                <div
                    style={{ background: 'green', fontSize: 50, fontWeight: 'bold', padding: 80, color: 'white' }}>
                    {this.state.counter}
                </div>
            </Fragment>
        );
    }
}

export default IntervalClassComponent;