import React from 'react';

class HandlingEvents extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isToggleOn: props.enabled }
        this.handleClick = this.handlerClick.bind(this);
    }
    
    handlerClick() {
        this.setState(state => ({
            isToggleOn: !state.isToggleOn
        }))
    }

    render() {
        return <button onClick={this.handleClick}>{this.state.isToggleOn ? 'On' : 'Off'}</button>;
    }
}

export default HandlingEvents;