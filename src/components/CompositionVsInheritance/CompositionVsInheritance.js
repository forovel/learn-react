import React from 'react';

class CompositionVsInheritance extends React.Component {
    render() {
        return (
            <div>
                <SplitPane left={<Contacts />} right={<About />} />
                <FancyBorder color="blue">
                    <h1 className="Dialog-title">
                        Welcome
                    </h1>
                    <p className="Dialog-message">
                        Thank you for visiting our spacecraft!
                    </p>
                </FancyBorder>
            </div>
        );
    }
}

export default CompositionVsInheritance;

function FancyBorder(props) {
    return (
        <div className={'FancyBorder FancyBorder-' + props.color}>
            {props.children}
        </div>
    );
}

function SplitPane(props) {
    return (
        <div className="SplitPane">
            <div className="SplitPane-left">
                {props.left}
            </div>
            <div className="SplitPane-right">
                {props.right}
            </div>
        </div>
    );
}

function Contacts(props) {
    return (<p>Contacts</p>)
}

function About(props) {
    return (<p>About</p>)
}