import { UserPic } from "../assets";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faImages } from "@fortawesome/free-solid-svg-icons";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import moment from "moment";
import { useState, useMemo, useRef, useEffect } from "react";
import ReactQuill from "react-quill";
import { updatePost } from "../../redux/slices/post.slice";
import { useSelector, useDispatch } from "react-redux";
import { getPosts } from "../../redux/slices/user.slice";

const PostModal = ({ setModal, post, edit }) => {
    const [position, setPosition] = useState({ lat: post.lat, lng: post.lon });
    const [text, setText] = useState({ desc: "" });
    const [title, setTitle] = useState(post.title);
    const [file, setFile] = useState(null);
    const dispatch = useDispatch();
    const { UserData } = useSelector((state) => state.user);

    const date = moment(new Date(post.created_at)).format("YYYY-MM-DD");
    useEffect(() => {
        setText((prev) => {
            return {
                ...prev,
                desc: post.desc,
            };
        });
    }, []);
    const markerRef = useRef(null);
    const eventHandlers = useMemo(
        () => ({
            dragend() {
                const marker = markerRef.current;
                if (marker != null) {
                    setPosition(marker.getLatLng());
                }
            },
        }),
        [setPosition]
    );

    const handleQuillEdit = (value) => {
        setText((prev) => {
            return {
                ...prev,
                desc: value,
            };
        });
    };

    const HandleSubmit = () => {
        if (text.desc.length === 0 || text.desc.includes("<br")) return;

        let newDate = new Date();
        let currentOffset = newDate.getTimezoneOffset();
        let ISTOffset = 330;
        let ISTTime = new Date(
            newDate.getTime() + (ISTOffset + currentOffset) * 60000
        );
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
        dispatch(updatePost(form));
        dispatch(getPosts());
        setTimeout(() => {
            setModal(0);
        }, 3000);
    };

    return (
        <div className="modal">
            <div className="modalContent">
                <div className="createPostHeader">
                    <div className="imageContainer">
                        <img
                            src={UserData.profile_photo}
                            alt="profilePicture"
                        />
                    </div>
                    <h3>{UserData.first_name}</h3>
                    <button
                        onClick={() => {
                            setModal(0);
                        }}
                    >
                        <FontAwesomeIcon icon={faTimes} />
                    </button>
                </div>

                <MapContainer center={[position.lat, position.lng]} zoom={13}>
                    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                    <Marker
                        draggable={edit === 0 ? false : true}
                        eventHandlers={eventHandlers}
                        position={position}
                        ref={markerRef}
                    >
                        <Popup minWidth={90}>
                            <span>This is the location!</span>
                        </Popup>
                    </Marker>
                </MapContainer>

                <div className={edit === 0 ? "details" : "details edit"}>
                    {edit === 0 ? (
                        <div className="date">
                            <div>
                                <h4>Created On</h4>
                                <h2>{date}</h2>
                            </div>
                        </div>
                    ) : (
                        <div className="title">
                            <h2>Title</h2>
                            <input
                                type="text"
                                value={title}
                                placeholder="Add a Title"
                                onChange={(e) => setTitle(e.target.value)}
                                required
                            />
                            <input
                                type="file"
                                style={{ display: "none" }}
                                id="fileUpload"
                                accept=".png,.jpeg,.jpg"
                                onChange={(e) => setFile(e.target.files[0])}
                            />
                        </div>
                    )}

                    {edit === 0 ? (
                        <div className="desc">
                            <p>{post.description}</p>
                        </div>
                    ) : (
                        <>
                            <h2>Desc</h2>
                            <div className="desc">
                                <ReactQuill
                                    value={text.desc}
                                    onChange={handleQuillEdit}
                                    modules={{ toolbar: false }}
                                    placeholder="Write something here..."
                                />
                            </div>
                        </>
                    )}
                </div>
                {edit === 1 ? (
                    <div className="submitBtn shadow">
                        <label className="imageBtn" htmlFor="fileUpload">
                            <FontAwesomeIcon icon={faImages} />
                        </label>
                        <button
                            onClick={() => {
                                HandleSubmit();
                            }}
                        >
                            Submit
                        </button>
                    </div>
                ) : null}
            </div>
        </div>
    );
};

export default PostModal;
