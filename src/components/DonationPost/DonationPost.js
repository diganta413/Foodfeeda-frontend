import { AboutPic, UserPic } from "../assets";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const DonationPost = ({ title }) => {
    return (
        <div className="donationPostContainer">
            <div className="imageContainer">
                <img src={AboutPic} alt="coverImage" />
            </div>
            <h2>{title}</h2>
            <div className="postHeader">
                <div className="imageContainer">
                    <img src={AboutPic} alt="coverImage" />
                </div>
                <h3>Bla bla bla</h3>
            </div>
            <p className="desc">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
            </p>
            <div className="footer">
                <div className="amount">
                    <h3>₹ 69000</h3>
                    <p>raised</p>
                </div>
                <div className="flex">
                    <div>
                        <p>Posted On</p>
                        <p>15th March 2022</p>
                    </div>
                    <div className="supporters">
                        <FontAwesomeIcon icon={faHeart} />
                        <p>15 Supporters</p>
                    </div>
                </div>
                <div className="donateBtn">
                    <button>Donate</button>
                </div>
            </div>
        </div>
    );
};

export default DonationPost;
