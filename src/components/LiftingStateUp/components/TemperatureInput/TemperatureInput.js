import React from 'react';
import PropTypes from 'prop-types';

import { scaleNames } from './../../LiftingStateUpUtils'

class TemperatureInput extends React.Component {
    handleChange = (event) => {
        this.props.onTemperatureChange(event.target.value);
    }
    
    render() {
        const { temperature, scale } = this.props;

        return (
            <fieldset>
                <legend>Enter temperature in {scaleNames[scale]}:</legend>
                <input value={temperature} onChange={this.handleChange} />
            </fieldset>
        );
    }
}

TemperatureInput.propTypes = {
    temperature: PropTypes.string,
    scale: PropTypes.string
}

export default TemperatureInput;
