import PropTypes from 'prop-types';

const SideBar = ({ posts }) => (
    <ul>
        {posts.map((post) =>
            <li key={post.id}>
                {post.title}
            </li>
        )}
    </ul>
);

SideBar.propTypes = {
    posts: PropTypes.array
}

export default SideBar;
