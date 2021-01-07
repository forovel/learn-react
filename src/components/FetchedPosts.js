import Post from './Post';
import Loader from './Loader';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../redux/actions';

const FetchedPosts = () => {
    const dispatch = useDispatch();
    const posts = useSelector((state) => state.posts.fetchedPosts);
    const loadingIndicator = useSelector((state) => state.app.loading);

    if (!posts.length && !loadingIndicator) {
        return <button 
            className="btn btn-primary"
            onClick={() => dispatch(fetchPosts())}
        >Download</button>
    }

    if (loadingIndicator) {
        return <Loader />
    }

    return posts.map(post => <Post key={post.id} post={post} />)

};

export default FetchedPosts;