import { useState } from "react";
import { AboutPic, UserPic } from "../assets";
import PostModal from "./postModal";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";
import axios from "../../config/axios";
import { commonSuccess } from "../../helpers/successResponse";
import { commonError } from "../../helpers/errorResponse";

const Post = ({ post }) => {
    const [modal, setModal] = useState(0);
    const { UserData } = useSelector((state) => state.user);

    const deletePost = () => {
        axios
            .delete(`/post/foodpost/${post.id}/`)
            .then((res) => {
                commonSuccess("Post deleted");
                window.location.reload();
            })
            .catch((err) => commonError(err));
    };

    return (
        <div className="postContainer shadow">
            <div className="postHeader">
                <div className="imageContainer">
                    <img
                        src={`http://localhost:8000${UserData.profile_photo}`}
                        alt="postImage"
                    />
                </div>
                <h2>{UserData.first_name}</h2>
                <div className="btnContainer">
                    <button
                        onClick={() => {
                            setModal(1);
                        }}
                    >
                        <FontAwesomeIcon icon={faEdit} />
                    </button>
                    <button onClick={() => deletePost()}>
                        <FontAwesomeIcon icon={faTrash} />
                    </button>
                </div>
            </div>
            <div className="postTitle">
                <h4>{post.title}</h4>
            </div>
            <div className="ngoDetails">
                <p>{post.description}</p>
                <h3>₹ {post.amount}</h3>
            </div>

            {modal == 1 && <PostModal setModal={setModal} post={post} />}
        </div>
    );
};

export default Post;
