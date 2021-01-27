import PropTypes from 'prop-types';

export const ComponentsAndProps = ({ name, messagesCount }) => (
      <div>
        <h1>Hello, {name}!</h1>
        <div>
          You received {messagesCount} message{messagesCount === 1 ? '' : 's'}
        </div>
      </div>
)

ComponentsAndProps.propTypes = {
  name: PropTypes.string,
  messagesCount: PropTypes.number
}

export default ComponentsAndProps;