import PropTypes from 'prop-types';

const Content = ({ posts }) => (
    posts.map((post) =>
        <div key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
        </div>
    )
);

Content.propTypes = {
    posts: PropTypes.array
}
  
export default Content;