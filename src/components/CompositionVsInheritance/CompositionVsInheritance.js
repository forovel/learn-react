import React from 'react';
import SplitPane from './components/SplitPane';
import About from './components/About';
import Contacts from './components/Contacts';
import FancyBorder from './components/FancyBorder';

const CompositionVsInheritance = () => (
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

export default CompositionVsInheritance;
