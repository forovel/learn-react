import React from 'react';
import PropTypes from 'prop-types';

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

HandlingEvents.propTypes = {
    enabled: PropTypes.bool
}

export default HandlingEvents;
