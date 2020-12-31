export const ComponentsAndProps = ({ name, messagesCount }) => (
      <div>
        <h1>Hello, {name}!</h1>
        <div>
          You received {messagesCount} message{messagesCount === 1 ? '' : 's'}
        </div>
      </div>
)

export default ComponentsAndProps;
