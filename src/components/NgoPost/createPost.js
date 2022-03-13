import { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { createPost } from "../../redux/slices/post.slice";
import { useSelector, useDispatch } from "react-redux";
import { getPosts } from "../../redux/slices/user.slice";

const CreatePost = () => {
    const dispatch = useDispatch();
    const { UserData } = useSelector((state) => state.user);

    const [modal, setModal] = useState(false);

    const [text, setText] = useState({ desc: "" });
    const campaignName = useRef("");
    const purpose = useRef("");
    const amount = useRef("");

    const HandleSubmit = (e) => {
        e.preventDefault();
        if (text.desc.length === 0 || text.desc.includes("<br")) return;
        console.log(amount.current.value);
        var form = new FormData();
        form.append(
            "description",
            text.desc.substring(3, text.desc.length - 4)
        );

        //console.log(form.get("food_photo"));
        // dispatch(createPost(form));
        // dispatch(getPosts());
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
                            <h3>Campaign Name</h3>
                            <div className="inputContainer">
                                <input
                                    type="text"
                                    ref={campaignName}
                                    placeholder="Add Campaign Name"
                                    required
                                />
                            </div>
                            <h3>Purpose</h3>
                            <div className="inputContainer">
                                <input
                                    type="text"
                                    ref={purpose}
                                    placeholder="Add Purpose"
                                    required
                                />
                            </div>
                            <h3>Amount</h3>
                            <div className="inputContainer">
                                <input
                                    type="number"
                                    ref={amount}
                                    placeholder="Add Amount"
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

                            <div className="buttonContainer">
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
