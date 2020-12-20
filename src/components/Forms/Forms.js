import React from 'react';

class Forms extends React.Component {
    constructor(props) {
        super(props);
        this.state = { name: '', flavor: '' };
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleFlavorChange = this.handleFlavorChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleNameChange(event) {
        this.setState({ name: event.target.value });
    }

    handleFlavorChange(event) {
        this.setState({ flavor: event.target.value });
    }

    handleSubmit(event) {
        alert(`Button submitted with name: ${this.state.name} and flavor: ${this.state.flavor}`);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
                    <input type="text" value={this.state.name} onChange={this.handleNameChange} />
                </label>
                <br />
                <label>
                Pick your favorite flavor:
                <select value={this.state.flavor} onChange={this.handleFlavorChange}>
                    <option value="grapefruit">Grapefruit</option>
                    <option value="lime">Lime</option>
                    <option value="coconut">Coconut</option>
                    <option value="mango">Mango</option>
                </select>
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

export default Forms;