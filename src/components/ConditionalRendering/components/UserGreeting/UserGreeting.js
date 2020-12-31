const UserGreeting = ({ isLoggedIn }) => isLoggedIn ? <h1>Welcome back!</h1> : <h1>Please sign up.</h1>;

export default UserGreeting;