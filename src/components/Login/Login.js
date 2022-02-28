import React, { useState } from "react";
import { Form, Input, Button, Checkbox, Row } from "antd";
import axios from "../../config/axios";
import {
    UserOutlined,
    LockOutlined,
    GooglePlusOutlined,
    FacebookFilled,
} from "@ant-design/icons";
import { commonSuccess } from "../../helpers/successResponse";
import {
    authenticate,
    isAuth,
    getUserId,
    getCookie,
} from "../../helpers/cookie";
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "../../redux/slices/user.slice";
import { useNavigate } from "react-router-dom";

const Login = ({ type, handleClose }) => {
    const [form] = Form.useForm();
    const [initialValues, setInitialValues] = useState({});
    const dispatch = useDispatch();
    const { userTokens } = useSelector((state) => state.user);
    let navigate = useNavigate();

    const onFinish = (values) => {
        var formData = new FormData();
        formData.append("email", form.getFieldValue("username"));
        formData.append("password", form.getFieldValue("password"));
        //console.log(form)
        /*axios.post("http://localhost:8000/api/auth/login/token/",formData)
      .then((res) => {
            authenticate(res.data)
            commonSuccess("User logged in successfully")
            form.resetFields()
            setTimeout(() => {
                window.location.reload()
            },3000)
      })
      .catch((err) => console.log(err))*/
        dispatch(userLogin(formData));
        setTimeout(() => {
            form.resetFields();
            handleClose();
            //const access = getCookie("access_token")
            const userId = getUserId();

            //window.location.reload()
            navigate(`/user/${userId}`);
        }, 3000);
    };
    //console.log(userTokens.access)

    return (
        <Form
            id="login"
            layout="vertical"
            name="normal_login"
            form={form}
            initialValues={initialValues}
            onFinish={onFinish}
        >
            <Form.Item
                name="username"
                rules={[
                    { required: true, message: "Please input your Username!" },
                ]}
            >
                <Input
                    prefix={<UserOutlined className="site-form-item-icon" />}
                    placeholder="Username"
                />
            </Form.Item>
            <Form.Item
                name="password"
                rules={[
                    { required: true, message: "Please input your Password!" },
                ]}
            >
                <Input
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    type="password"
                    placeholder="Password"
                />
            </Form.Item>
            <Form.Item>
                <Form.Item name="remember" valuePropName="checked" noStyle>
                    <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <a className="login-form-forgot ml-[50%]" href="">
                    Forgot password
                </a>
            </Form.Item>

            <Form.Item className="ml-[42%]">
                <Button
                    htmlType="submit"
                    type="primary"
                    className="rounded bg-[#52c41a] border-[#52c41a] hover:bg-[#73d13d] hover:border-[#73d13d] text-[15px]"
                    onClick={onFinish}
                >
                    Log in
                </Button>
            </Form.Item>

            <div>
                <p className="ml-[30%]">---------- OR ----------</p>
                <Row className="w-[90%] ml-[8%] mt-[30px]">
                    <Button
                        className="font-bold bg-[#D34F44] border-[#D34F44] h-[40px] 
            rounded hover:bg-[#D34F44] hover:border-[#D34F44] w-[45%]"
                        type="primary"
                    >
                        <GooglePlusOutlined className="text-[20px]" /> Login
                        with Google
                    </Button>
                    <Button
                        className="font-bold bg-[#4267b2] border-[#4267b2] w-[45%] 
            ml-[5%] h-[40px] rounded hover:bg-[#4267b2] hover:border-[#4267b2]"
                        type="primary"
                    >
                        <FacebookFilled className="text-[20px]" /> Login with
                        Facebook
                    </Button>
                </Row>
            </div>
        </Form>
    );
};

export default Login;
