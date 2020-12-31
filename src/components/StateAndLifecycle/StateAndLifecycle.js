import React from 'react';

class StateAndLifecycle extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            date: new Date(),
            counter: props.counter 
        };
    }
    
    componentDidMount() {
        this.timerID = setInterval(
            () => {
                this.tick();
                this.increment();
            },
            1000
        );
    }
    
    componentWillUnmount() {
        clearInterval(this.timerID);
    }
    
    tick() {
        this.setState({
            date: new Date()
        });
    }

    increment() {
        this.setState((state) => ({
            counter: state.counter + 1
        }));
    }
    
    render() {
        return (
          <div>
            <h1>Hello, world!</h1>
            <h2>It is {this.state.date.toLocaleString()}.</h2>
            <h2>Value: {this.state.counter}</h2>
          </div>
        );
    }
}

export default StateAndLifecycle;
