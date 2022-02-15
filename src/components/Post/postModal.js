import { UserPic } from "../assets";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const PostModal = ({ setModal }) => {
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
      </div>
    </div>
  );
};

export default PostModal;
