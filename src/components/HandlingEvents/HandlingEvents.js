import React from 'react';

class HandlingEvents extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isToggleOn: props.enabled };
    }
    
    handlerClick = () => {
        this.setState(state => ({
            isToggleOn: !state.isToggleOn
        }))
    }

    render() {
        const { isToggleOn } = this.state;
        return <button onClick={this.handlerClick}>{isToggleOn ? 'On' : 'Off'}</button>;
    }
}

export default HandlingEvents;
