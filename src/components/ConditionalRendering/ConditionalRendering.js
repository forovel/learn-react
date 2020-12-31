import React from 'react';
import UserGreeting from './components/UserGreeting';
import LogoutButton from './components/LogoutButton';
import LoginButton from './components/LoginButton';

class ConditionalRendering extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isLoggedIn: false };
    }
    
    handleLoginClick = () => {
        this.setState({ isLoggedIn: true });
    }
    
    handleLogoutClick = () => {
        this.setState({ isLoggedIn: false });
    }
    
    render() {
        const { isLoggedIn } = this.state;
        return (
            <div>
                <UserGreeting isLoggedIn={isLoggedIn} />
                { isLoggedIn ? <LogoutButton onClick={this.handleLogoutClick} /> : <LoginButton onClick={this.handleLoginClick} /> }
            </div>
        );
    }
}

export default ConditionalRendering;
