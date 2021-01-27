import PropTypes from 'prop-types';

const SplitPane = ({ left, right }) => {
    return (
        <div className="SplitPane">
            <div className="SplitPane-left">
                {left}
            </div>
            <div className="SplitPane-right">
                {right}
            </div>
        </div>
    );
}

SplitPane.propTypes = {
    left: PropTypes.element,
    right: PropTypes.element
}

export default SplitPane;