import React from 'react';

function formatUser(user) {
    return user.firstName + " " + user.lastName;
};

function getGreetings(user) {
    if (user) {
        return (
            <div>
                <h1> Hello, {formatUser(user)}! </h1>
                <img alt="avatar" src={user.avatarUrl} />
            </div>
        );
    } else {
        return (
            <div>
                <h1> Hello, Stranger! </h1>
            </div>
        );
    }
}

const user = {
    firstName: 'Jim',
    lastName: 'Smith',
    avatarUrl: 'http://avatar.net/image'
};

const element = getGreetings(user);

class IntroducingJsx extends React.Component {
    render() {
      return element;
    }
};