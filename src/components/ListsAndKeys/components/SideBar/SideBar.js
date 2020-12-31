const SideBar = ({ posts }) => (
    <ul>
        {posts.map((post) =>
            <li key={post.id}>
                {post.title}
            </li>
        )}
    </ul>
);

export default SideBar;
