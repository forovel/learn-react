import PropTypes from 'prop-types';

const BoilingVerdict = ({ celsius }) => 
    celsius >= 100 ? <p>The water would boil.</p> : <p>The water would not boil.</p>;

BoilingVerdict.propTypes = {
    celsius: PropTypes.number
}

export default BoilingVerdict;
