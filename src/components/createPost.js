import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImages, faTimes } from "@fortawesome/free-solid-svg-icons";
import { UserPic } from "../components/assets";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { MapContainer, TileLayer } from "react-leaflet";
import LocationMarker from "./locationMarker";

const CreatePost = () => {
  const [file, setFile] = useState(null);
  const [modal, setModal] = useState(0);
  const [text, setText] = useState({ desc: "" });
  const [position, setPosition] = useState({ lat: "22.541", lng: "88.353" });

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
      name: "#placeholder",
      photo: "url",
      desc: text.desc.substring(3, text.desc.length - 4),
      received: false,
      createdAt: `${hour}-${min}-${date}-${month}-${year}`,
      latitude: position.lat,
      longitude: position.lng,
    };
    console.log(data);
    setModal(0);
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

              <MapContainer center={[22.541, 88.353]} zoom={13}>
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                <LocationMarker position={position} setPosition={setPosition} />
              </MapContainer>

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
