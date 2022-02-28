import { UserPic } from "../assets";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import date from "date-and-time";
import { useSelector } from "react-redux";
import moment from "moment";

const PostModal = ({ setModal, post }) => {
    const position = { lat: post.lat, lng: post.lon };
    const now = new Date();
    const { UserData } = useSelector((state) => state.user);
    const date = moment(new Date(post.created_at)).format("YYYY-MM-DD");

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
                    <Marker draggable={false} position={position}>
                        <Popup minWidth={90}>
                            <span>This is the location!</span>
                        </Popup>
                    </Marker>
                </MapContainer>

                <div className="details">
                    <div className="date">
                        <div>
                            <h4>Created On</h4>
                            <h2>{date}</h2>
                        </div>
                    </div>
                    <div className="desc">
                        <p>{post.description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PostModal;
