import React from 'react';

class ComponentsAndProps extends React.Component {
    render() {
        return (
            <div>
                <h1>Hello, {this.props.name}!</h1>
                <div>You received {this.props.messagesCount} message{this.props.messagesCount === 1 ? '' : 's'}</div>
            </div>
        );
    }
}

export default ComponentsAndProps;