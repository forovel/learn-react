import React from 'react';

class RenderingComponents extends React.Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date() }
    }
    
    componentDidMount(){
        this.interval = setInterval(() => {
            this.setState({ date: new Date() })
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        return (
            <div>
                <h1>Hello, world!</h1>
                <h2>It is {this.state.date.toLocaleString()}</h2>
            </div>
        );
    }
}

export default RenderingComponents;
