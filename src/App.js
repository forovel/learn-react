import PostFrom from "./components/PostFrom";
import Posts from "./components/Posts";
import FetchedPosts from "./components/FetchedPosts";

const App = () => {
  return (
    <div className="container pt-3">
      <div className="row">
        <div className="col">
          <PostFrom />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <h2>Synchronous Posts:</h2>
          <Posts />
        </div>
        <div className="col">
          <h2>Asynchronous Posts:</h2>
          <FetchedPosts />
        </div>
      </div>
    </div>
  );
}

export default App;
