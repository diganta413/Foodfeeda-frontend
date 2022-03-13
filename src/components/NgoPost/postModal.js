import { UserPic } from "../assets";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import moment from "moment";
import { useState, useMemo, useRef, useEffect } from "react";
import ReactQuill from "react-quill";
import { useSelector } from "react-redux";
import axios from "../../config/axios";
import { getCookie } from "../../helpers/cookie";
import { SuccessResponse, commonSuccess } from "../../helpers/successResponse";
import { commonError } from "../../helpers/errorResponse";

const PostModal = ({ setModal, post }) => {
    const [position, setPosition] = useState({ lat: post.lat, lng: post.lon });
    const [text, setText] = useState({ desc: "" });
    const [title, setTitle] = useState(post.title);
    const [amount, setAmount] = useState(post.amount);
    const [purpose, setPurpose] = useState(post.purpose);
    const { UserData } = useSelector((state) => state.user);

    const date = moment(new Date(post.created_at)).format("YYYY-MM-DD");
    useEffect(() => {
        setText((prev) => {
            return {
                ...prev,
                desc: post.description,
            };
        });
    }, []);

    const handleQuillEdit = (value) => {
        setText((prev) => {
            return {
                ...prev,
                desc: value,
            };
        });
    };
    console.log(post);

    const HandleSubmit = async () => {
        if (text.desc.length === 0 || text.desc.includes("<br")) return;

        let newDate = new Date();
        let currentOffset = newDate.getTimezoneOffset();
        let ISTOffset = 330;
        let ISTTime = new Date(
            newDate.getTime() + (ISTOffset + currentOffset) * 60000
        );
        var form = new FormData();
        form.append("title", title);
        form.append(
            "description",
            text.desc.substring(3, text.desc.length - 4)
        );
        for (var value of form.values()) {
            console.log(value);
        }
        axios
            .put(`/post/foodpost/${post.id}/`, form)
            .then((res) => {
                commonSuccess("Post updated");
                setTimeout(() => {
                    setModal(0);
                }, 3000);
            })
            .catch((err) => {
                commonError(err);
            });
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

                <div className="details edit">
                    <div className="title">
                        <h2>Title</h2>
                        <input
                            type="text"
                            value={title}
                            placeholder="Add a Title"
                            onChange={(e) => setTitle(e.target.value)}
                            required
                        />
                    </div>
                    <div className="title">
                        <h2>Amount</h2>
                        <input
                            type="number"
                            value={amount}
                            placeholder="Add Amount"
                            onChange={(e) => setAmount(e.target.value)}
                            required
                        />
                    </div>
                    <div className="title">
                        <h2>Purpose</h2>
                        <input
                            type="text"
                            value={purpose}
                            placeholder="Add Purpose"
                            onChange={(e) => setPurpose(e.target.value)}
                            required
                        />
                    </div>
                    <h2>Desc</h2>
                    <div className="desc">
                        <ReactQuill
                            value={text.desc || ""}
                            onChange={handleQuillEdit}
                            modules={{ toolbar: false }}
                            placeholder="Write something here..."
                        />
                    </div>
                </div>
                <div
                    className="submitBtn shadow"
                    style={{ justifyContent: "center" }}
                >
                    <button
                        onClick={() => {
                            HandleSubmit();
                        }}
                    >
                        Submit
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PostModal;
