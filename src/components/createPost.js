import { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImages } from "@fortawesome/free-solid-svg-icons";
import { UserPic } from "../components/assets";

const CreatePost = () => {
  const [file, setFile] = useState(null);
  const desc = useRef("");

  const HandleSubmit = (e) => {
    e.preventDefault();

    let newDate = new Date();
    let currentOffset = newDate.getTimezoneOffset();
    let ISTOffset = 330;
    let ISTTime = new Date(
      newDate.getTime() + (ISTOffset + currentOffset) * 60000
    );
    let date = ISTTime.getDate();
    let month = ISTTime.getMonth() + 1;
    let year = ISTTime.getFullYear();
    let hour = ISTTime.getHours();
    let min = ISTTime.getMinutes();

    const data = {
      userid: "#placeholder",
      postid: "#placeholder",
      photo: "url",
      desc: desc.current.value,
      received: false,
      createdAt: `${hour}-${min}-${date}-${month}-${year}`,
    };
    console.log(data);
  };

  return (
    <div className="createPostContainer">
      <div className="createPostHeader">
        <img src={UserPic} alt="profilePicture"></img>
        <h3>Username</h3>
      </div>

      <form className="createPostContent" onSubmit={HandleSubmit}>
        <div className="inputContainer">
          <textarea placeholder={"Create a post!"} ref={desc} />
          <input
            type="file"
            style={{ display: "none" }}
            id="fileUpload"
            accept=".png,.jpeg,.jpg"
            onChange={(e) => setFile(e.target.files[0])}
          />
        </div>

        <div className="buttonContainer">
          <label className="imageBtn" htmlFor="fileUpload">
            <FontAwesomeIcon icon={faImages} />
          </label>
          <button className="postBtn" type="submit">
            Post
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreatePost;
