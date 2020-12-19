import React from 'react';

class ListsAndKeys extends React.Component {
    constructor(props) {
        super(props);
        this.posts = [
            { id: 1, title: 'Hello World', content: 'Welcome to learning React!' },
            { id: 2, title: 'Installation', content: 'You can install React from npm.' }
        ];
    }
    
    sideBar() {
        return (
            <ul>
                {this.posts.map((post) =>
                    <li key={post.id}>
                    {post.title}
                    </li>
                )}
            </ul>
        )
    }

    content() {
        return (this.posts.map((post) =>
            <div key={post.id}>
                <h3>{post.title}</h3>
                <p>{post.content}</p>
            </div>
        ))
    }

    render() {
        return (
            <div>
                <hr />
                {this.sideBar()}
                <hr />
                {this.content()}
            </div>
        );
    }
}

export default ListsAndKeys;