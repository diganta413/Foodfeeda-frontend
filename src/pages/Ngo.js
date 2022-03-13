import CreatePost from "../components/NgoPost/createPost";
import Post from "../components/NgoPost/post";
import { getAuth } from "../helpers/cookie";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Header from "../components/Header/header";
import { useDispatch, useSelector } from "react-redux";
import { getUserData, getPosts } from "../redux/slices/user.slice";
import axios from "axios";
import { getCookie, getUserId } from "../helpers/cookie";
import jwt from "jwt-decode";

const Ngo = () => {
    return (
        <>
            <Header />
            <div className="userLayout">
                <div className="content">
                    <CreatePost />
                    <Post
                        post={{
                            title: "Test",
                            first_name: "Test",
                            food_photo: "aafa",
                            purpose: "test",
                            created_at:
                                "Tue Mar 01 2022 10:58:24 GMT+0530 (India Standard Time)",
                            description:
                                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummytext ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
                            amount: 41522,
                        }}
                    />
                </div>
            </div>
        </>
    );
};

export default Ngo;
