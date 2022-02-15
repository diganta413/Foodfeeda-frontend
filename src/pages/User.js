import CreatePost from "../components/CreatePost/createPost";
import Post from "../components/Post/post";

const User = () => {
  return (
    <div className="userHomeLayout">
      <div className="userHomeContent">
        <CreatePost />
        <Post />
        <Post />
      </div>
    </div>
  );
};

export default User;
