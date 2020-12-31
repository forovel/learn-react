import React from 'react';
import SideBar from './components/SideBar';
import Content from './components/Content';

class ListsAndKeys extends React.Component {
    constructor(props) {
        super(props);
        this.posts = [
            { id: 1, title: 'Hello World', content: 'Welcome to learning React!' },
            { id: 2, title: 'Installation', content: 'You can install React from npm.' }
        ];
    }

    render() {
        return (
            <div>
                <hr />
                <Content posts={this.posts} />
                <hr />
                <SideBar posts={this.posts} />
            </div>
        );
    }
}

export default ListsAndKeys;
