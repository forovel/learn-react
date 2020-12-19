import React from 'react';

class ConditionalRendering extends React.Component {
    constructor(props) {
        super(props);
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
        this.state = { isLoggedIn: false };
    }
    
    handleLoginClick() {
        this.setState({ isLoggedIn: true });
    }
    
    handleLogoutClick() {
        this.setState({ isLoggedIn: false });
    }
    
    render() {
        const isLoggedIn = this.state.isLoggedIn;
    
        return (
            <div>
                <Greeting isLoggedIn={isLoggedIn} />
                { isLoggedIn ? <LogoutButton onClick={this.handleLogoutClick} /> : <LoginButton onClick={this.handleLoginClick} /> }
            </div>
        );
    }
}

export default ConditionalRendering;

function LoginButton(props) {
    return (
        <button onClick={props.onClick}>
            Login
        </button>
    );
}
  
function LogoutButton(props) {
    return (
        <button onClick={props.onClick}>
            Logout
        </button>
    );
}

function Greeting(props) {
    return props.isLoggedIn ? <UserGreeting /> : <GuestGreeting />;
}

function UserGreeting() {
    return <h1>Welcome back!</h1>;
}
  
function GuestGreeting() {
    return <h1>Please sign up.</h1>;
}