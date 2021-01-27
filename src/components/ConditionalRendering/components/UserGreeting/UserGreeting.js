import PropTypes from 'prop-types';

const UserGreeting = ({ isLoggedIn }) => isLoggedIn ? <h1>Welcome back!</h1> : <h1>Please sign up.</h1>;

UserGreeting.propTypes = {
    isLoggedIn: PropTypes.bool
}

export default UserGreeting;