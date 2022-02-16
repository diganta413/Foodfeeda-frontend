import { UserPic } from "../assets";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import date from "date-and-time";

const PostModal = ({ setModal }) => {
  const position = { lat: "22.541", lng: "88.353" };
  const now = new Date();

  return (
    <div className="modal">
      <div className="modalContent">
        <div className="createPostHeader">
          <div className="imageContainer">
            <img src={UserPic} alt="profilePicture" />
          </div>
          <h3>Username</h3>
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
              <h2>{date.format(now, "MMM DD YYYY")}</h2>
            </div>
          </div>
          <div className="desc">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostModal;
