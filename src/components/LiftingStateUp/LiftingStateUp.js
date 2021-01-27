import React from 'react';
import TemperatureInput from './components/TemperatureInput';
import BoilingVerdict from './components/BoilingVerdict';
import { tryConvert, toCelsius, toFahrenheit } from './LiftingStateUpUtils';

class LiftingStateUp extends React.Component {    
    constructor(props) {
        super(props);
        this.state = { temperature: '', scale: 'c' };
    }
    
    handleCelsiusChange = (temperature) => {
        this.setState({ scale: 'c', temperature });
    }
    
    handleFahrenheitChange = (temperature) => {
        this.setState({ scale: 'f', temperature });
    }
    
    render() {
        const { temperature, scale } = this.state;
        const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
        const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;
        
        return (
            <div>
                <TemperatureInput
                    scale="c"
                    temperature={celsius}
                    onTemperatureChange={this.handleCelsiusChange} />
                <TemperatureInput
                    scale="f"
                    temperature={fahrenheit}
                    onTemperatureChange={this.handleFahrenheitChange} />
                <BoilingVerdict celsius={parseFloat(celsius)} />
            </div>
        );
    }
}

export default LiftingStateUp;