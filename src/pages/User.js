import CreatePost from "../components/UserPost/createPost";
import Post from "../components/UserPost/post";
import { getAuth } from "../helpers/cookie";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Header from "../components/Header/header";
import { useDispatch, useSelector } from "react-redux";
import { getUserData, getPosts } from "../redux/slices/user.slice";
import axios from "axios";
import { getCookie, getUserId } from "../helpers/cookie";
import jwt from "jwt-decode";

const User = () => {
    //const userID = localStorage.getItem("userId")
    const userID = getUserId();
    const access = getCookie("access_token");
    //const user = getAuth()
    let navigate = useNavigate();
    let dispatch = useDispatch();
    const { userPosts } = useSelector((state) => state.user);

    /*useEffect(() => {
    if (!access){
       return navigate(`/`);
    }
 },[]);*/

    useEffect(() => {
        dispatch(getUserData({ id: userID }));
        dispatch(getPosts());
        /*const { data } = await axios.get(`http://localhost:8000/api/donner/user/${userID}`,
        {
          headers: {
            "Access-Control-Allow-Headers":  "Content-Type, X-Auth-Token, Authorization, Origin",
            'Authorization': `BEARER ${getCookie("access_token")}`,
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "DELETE, POST, GET"
          }
        }
      )
      console.log(data)*/
    }, []);

    return (
        <>
            <Header />
            <div className="userLayout">
                <div className="content">
                    <CreatePost />
                    {userPosts.map((post) => (
                        <Post post={post} />
                    ))}
                </div>
            </div>
        </>
    );
};

export default User;
