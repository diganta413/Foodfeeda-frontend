import { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImages, faTimes } from "@fortawesome/free-solid-svg-icons";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { MapContainer, TileLayer } from "react-leaflet";
import LocationMarker from "./locationMarker";
import { createPost } from "../../redux/slices/post.slice";
import { useSelector, useDispatch } from "react-redux";
import { getPosts } from "../../redux/slices/user.slice";

const CreatePost = () => {
    const [file, setFile] = useState(null);
    const [modal, setModal] = useState(false);
    const [text, setText] = useState({ desc: "" });
    const [position, setPosition] = useState({ lat: "22.541", lng: "88.353" });
    const title = useRef("");
    const dispatch = useDispatch();
    const { UserData } = useSelector((state) => state.user);

    const HandleSubmit = (e) => {
        e.preventDefault();
        if (text.desc.length === 0 || text.desc.includes("<br")) return;

        var form = new FormData();
        form.append("food_photo", file);
        form.append("title", title.current.value);
        form.append(
            "description",
            text.desc.substring(3, text.desc.length - 4)
        );
        form.append("lat", position.lat.toString());
        form.append("lon", position.lng.toString());
        form.append("place", "Krishnanagar");

        //console.log(form.get("food_photo"));
        dispatch(createPost(form));
        dispatch(getPosts());
        setTimeout(() => {
            setModal(false);
        }, 3000);
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
        <div className="createPostContainer shadow">
            <div className="createPostHeader">
                <div className="imageContainer">
                    <img src={UserData.profile_photo} alt="profilePicture" />
                </div>
                <h3>Username</h3>
            </div>
            <button
                className="createPostButton"
                onClick={() => {
                    setModal(true);
                }}
            >
                Create Post!
            </button>
            {modal ? (
                <div className="modal">
                    <div className="modalContent">
                        <div className="createPostHeader">
                            <div className="imageContainer">
                                <img
                                    src={UserData.profile_photo}
                                    alt="profilePicture"
                                />
                            </div>
                            <h3>Username</h3>
                            <button
                                onClick={() => {
                                    setModal(false);
                                }}
                            >
                                <FontAwesomeIcon icon={faTimes} />
                            </button>
                        </div>

                        <form
                            className="createPostContent"
                            onSubmit={HandleSubmit}
                        >
                            <input
                                type="file"
                                style={{ display: "none" }}
                                id="fileUpload"
                                accept=".png,.jpeg,.jpg"
                                onChange={(e) => setFile(e.target.files[0])}
                            />
                            <h3>Title</h3>
                            <div className="inputContainer">
                                <input
                                    type="text"
                                    ref={title}
                                    placeholder="Add a Title"
                                    required
                                />
                            </div>
                            <h3>Description</h3>
                            <ReactQuill
                                value={text.desc}
                                onChange={handleQuillEdit}
                                modules={{ toolbar: false }}
                                placeholder="Write something here..."
                            />
                            <MapContainer
                                center={[position.lat, position.lng]}
                                zoom={13}
                            >
                                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                                <LocationMarker
                                    position={position}
                                    setPosition={setPosition}
                                />
                            </MapContainer>

                            <div className="buttonContainer">
                                <label
                                    className="imageBtn"
                                    htmlFor="fileUpload"
                                >
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
