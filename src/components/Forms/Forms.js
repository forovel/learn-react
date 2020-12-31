import React from 'react';

class Forms extends React.Component {
    constructor(props) {
        super(props);
        this.state = { name: '', flavor: '' };
    }
    
    handleNameChange = (event) => {
        this.setState({ name: event.target.value });
    }

    handleFlavorChange = (event) => {
        this.setState({ flavor: event.target.value });
    }

    handleSubmit = (event) => {
        const { name, flavor } = this.state;
        alert(`Button submitted with name: ${name} and flavor: ${flavor}`);
        event.preventDefault();
    }

    render() {
        const { name, flavor } = this.state;

        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
                    <input type="text" value={name} onChange={this.handleNameChange} />
                </label>
                <br />
                <label>
                Pick your favorite flavor:
                <select value={flavor} onChange={this.handleFlavorChange}>
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
