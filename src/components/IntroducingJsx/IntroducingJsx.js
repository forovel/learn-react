import React from 'react';

const user = {
    firstName: 'Jim',
    lastName: 'Smith',
    avatarUrl: 'http://avatar.net/image'
};

const IntroducingJsx = () => {
    let element;

    if (user) {
        element = (
            <div>
                <h1> Hello, {formatUser(user)}! </h1>
                <img alt="avatar" src={user.avatarUrl} />
            </div>
        );
    } else {
        element = (
            <div>
                <h1> Hello, Stranger! </h1>
            </div>
        );
    }

    return element;
};

export default IntroducingJsx;

const formatUser = (user) => {
    return user.firstName + " " + user.lastName;
};
