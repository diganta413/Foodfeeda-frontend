import { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImages, faTimes } from "@fortawesome/free-solid-svg-icons";
import { UserPic } from "../components/assets";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const CreatePost = () => {
  const [file, setFile] = useState(null);
  const [modal, setModal] = useState(0);
  const [text, setText] = useState({ desc: "" });
  const HandleSubmit = (e) => {
    e.preventDefault();
    if (text.desc.length === 0 || text.desc.includes("<br")) return;

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
      desc: text.desc.substring(3, text.desc.length - 4),
      received: false,
      createdAt: `${hour}-${min}-${date}-${month}-${year}`,
    };
    console.log(data);
  };

  const handleQuillEdit = (value) => {
    setText((prev) => {
      return {
        ...prev,
        desc: value,
      };
    });
  };

  return (
    <div className="createPostContainer">
      <div className="createPostHeader">
        <img src={UserPic} alt="profilePicture"></img>
        <h3>Username</h3>
      </div>
      <button
        className="createPostButton"
        onClick={() => {
          setModal(1);
        }}
      >
        Create Post!
      </button>
      {modal === 1 ? (
        <div className="modal">
          <div className="modalContent">
            <div className="createPostHeader">
              <img src={UserPic} alt="profilePicture"></img>
              <h3>Username</h3>
              <button
                onClick={() => {
                  setModal(0);
                }}
              >
                <FontAwesomeIcon icon={faTimes} />
              </button>
            </div>
            <ReactQuill
              value={text.desc}
              onChange={handleQuillEdit}
              modules={{ toolbar: false }}
              placeholder="Write something here..."
            />
            <form className="createPostContent" onSubmit={HandleSubmit}>
              <div className="inputContainer">
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
        </div>
      ) : null}
    </div>
  );
};

export default CreatePost;
