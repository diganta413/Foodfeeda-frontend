import { useState } from "react";
import { AboutPic, UserPic } from "../assets";
import PostModal from "./postModal";

const Post = () => {
  const [modal, setModal] = useState(0);
  return (
    <div className="postContainer shadow">
      <div className="postHeader">
        <div className="imageContainer">
          <img src={UserPic} alt="postImage" />
        </div>
        <h2>Username</h2>
      </div>
      <div className="postTitle">
        <h4>Lorem ipsum blah blah blah</h4>
      </div>
      <div className="postImage" onClick={() => setModal(1)}>
        <img src={AboutPic} alt="postImage" />
        <div className="text">
          <h2>More Details!</h2>
        </div>
      </div>
      {modal === 1 ? <PostModal setModal={setModal} /> : null}
    </div>
  );
};

export default Post;
