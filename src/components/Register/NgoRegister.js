import React, { useEffect, useState } from "react";
import {
    Form,
    Input,
    Button,
    Row,
    Select,
    InputNumber,
    Upload,
    DatePicker,
    Modal,
} from "antd";
import { UploadOutlined } from "@ant-design/icons";
import CountryCodes from "../../CountryCodes";
import axios from "../../config/axios";
import moment from "moment";
import firebase from "../../config/firebase";
import {
    getAuth,
    RecaptchaVerifier,
    signInWithPhoneNumber,
    confir,
} from "firebase/auth";
import { commonSuccess } from "../../helpers/successResponse";
import { commonError, errorResponse } from "../../helpers/errorResponse";

const { Option } = Select;

const NgoRegister = () => {
    const [form] = Form.useForm();
    const [initialValues, setInitialValues] = useState({});
    const [otp, setotp] = useState(false);
    const [final, setfinal] = useState("");
    const [form2] = Form.useForm();

    function displayCountryCode(value) {
        var countrycode = document.getElementById("countrycode");
        console.log(countrycode.text);
        countrycode.text = value;
        console.log(countrycode.text);
    }

    useEffect(() => {
        form.setFieldsValue(initialValues);
    }, [form, initialValues]);

    const error = () => {
        console.log("dsa");
    };

    useEffect(() => {
        console.log("dfsa");
        //if (window.navigator.geolocation) {
        window.navigator.geolocation.getCurrentPosition((pos) => {
            const { latitude, longitude } = pos.coords;
            fetch(
                `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=a3dc155e690648a98e2fb1693f4f6ef3`
            )
                .then((response) => response.json())
                .then((res) => {
                    const city = res?.results[0]?.components?.city;
                    const country = res?.results[0]?.components?.country;
                    const state = res?.results[0]?.components?.state;
                    setInitialValues((prevState) => ({
                        ...prevState,
                        country: country,
                        state: state,
                        city: city,
                    }));
                });
        }, error);
        //}
        //else{
        //   handlePermission()
        //}
    }, []);
    console.log(initialValues);

    const onFinish = (values) => {
        const phone =
            "+91" + form.getFieldValue("num1") + form.getFieldValue("num2");
        const auth = getAuth();
        window.recaptchaVerifier = new RecaptchaVerifier(
            "recaptcha-container",
            {},
            auth
        );
        const appVerifier = window.recaptchaVerifier;
        signInWithPhoneNumber(auth, phone, appVerifier)
            .then((confirmationResult) => {
                alert("Code sent");
                setotp(true);
                setfinal(confirmationResult);

                // User signed in successfully.
            })
            .catch((err) => {
                alert(err);
                //window.location.reload()
            });
    };

    const ValidateOtp = () => {
        if (form2.getFieldValue("otp") === null || final === null) return;
        final
            ?.confirm(form2.getFieldValue("otp"))
            .then((result) => {
                //alert("signed  in")
                var formData = new FormData();
                const data = form.getFieldsValue();
                formData.append("email", form.getFieldValue("email"));
                formData.append("name", form.getFieldValue("name"));
                formData.append("email", form.getFieldValue("email"));
                formData.append(
                    "phone_number",
                    "+91" +
                        form.getFieldValue("num1") +
                        form.getFieldValue("num2")
                );
                formData.append("password", form.getFieldValue("password"));
                formData.append("password2", form.getFieldValue("password2"));
                formData.append("type", "1");
                formData.append("country", form.getFieldValue("country"));
                formData.append("state", form.getFieldValue("state"));
                formData.append("city", form.getFieldValue("city"));
                formData.append("gender", form.getFieldValue("gender"));
                formData.append("pin", form.getFieldValue("pin"));
                formData.append(
                    "ngo_approval_cert",
                    form.getFieldValue("ngo_approval_cert").fileList[0]
                        .originFileObj
                );
                const dateFormat = "YYYY-MM-DD";
                const toDateFormat = moment(
                    new Date(form.getFieldValue("dob"))
                ).format(dateFormat);
                formData.append("DOB", toDateFormat);
                console.log(
                    form.getFieldValue("profile_pic").fileList[0].originFileObj
                );
                for (var key of formData.entries()) {
                    console.log(key[0] + ": " + key[1]);
                }
                axios
                    .post(
                        "http://localhost:8000/api/auth/ngo/register/",
                        formData
                    )
                    .then((res) => {
                        commonSuccess(res);
                        console.log(res);
                        setTimeout(() => {
                            setotp(false);
                        }, 3000);
                    })
                    .catch((err) => {
                        console.log(err.response);
                        errorResponse(err.response);
                    });
            })
            .catch((err) => {
                alert(err);
            });
    };

    const phone = (e) => {
        if (e.target.value.length >= 5) {
            document.getElementById("num2").focus();
        }
    };

    return (
        <Form
            id="register"
            layout="vertical"
            name="normal_login"
            initialValues={initialValues}
            form={form}
            onFinish={onFinish}
            className="w-[90%] ml-[5%]"
        >
            <Row className="justify-between">
                <Form.Item
                    label="Name"
                    name="name"
                    rules={[{ message: "Please input ngo name!" }]}
                >
                    <Input placeholder="Name" />
                </Form.Item>
                <Form.Item
                    name="email"
                    label="Email"
                    rules={[
                        { required: true, message: "Please input your email" },
                    ]}
                >
                    <Input placeholder="Email" />
                </Form.Item>
            </Row>
            <Row className="justify-between">
                <Form.Item
                    label="Password"
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: "Please enter your password",
                        },
                    ]}
                    className="w-[47%]"
                >
                    <Input.Password />
                </Form.Item>
                <Form.Item
                    label="Confirm Password"
                    name="password2"
                    rules={[{ required: true }]}
                    className="w-[47%]"
                >
                    <Input.Password />
                </Form.Item>
            </Row>
            <Form.Item
                label="Mobile No"
                name="number"
                rules={[
                    {
                        required: true,
                        message: "Please input your mobile number!",
                    },
                ]}
            >
                <Row className="leading-[0]">
                    <Form.Item
                        name="countryCode"
                        rules={[
                            {
                                required: true,
                                message: "Please input your mobile number!",
                            },
                        ]}
                    >
                        <Select
                            id="countrycode"
                            style={{ width: 80 }}
                            onChange={(value) => displayCountryCode(value)}
                        >
                            {CountryCodes.map((country) => (
                                <Option value={country.dial_code}>
                                    {country.dial_code}
                                </Option>
                            ))}
                        </Select>
                    </Form.Item>
                    <Form.Item
                        name="num1"
                        rules={[
                            {
                                required: true,
                                message: "Please input your mobile number!",
                            },
                        ]}
                        className="w-[20%]"
                    >
                        <Input
                            id="num1"
                            className="ml-[20px]"
                            onChange={phone}
                        />
                    </Form.Item>
                    <p className="mt-[3%] ml-[40px]">-</p>
                    <Form.Item
                        name="num2"
                        rules={[
                            {
                                required: true,
                                message: "Please input your mobile number!",
                            },
                        ]}
                        className="w-[20%]"
                    >
                        <Input className="ml-[20px]" id="num2" />
                    </Form.Item>
                </Row>
            </Form.Item>

            <Form.Item
                label="Pin"
                name="pin"
                rules={[{ required: true, message: "Please input your pin" }]}
            >
                <InputNumber className="w-[40%]" />
            </Form.Item>

            <Row>
                <Form.Item
                    label="Country"
                    name="country"
                    rules={[
                        {
                            required: true,
                            message: "Please input your country",
                        },
                    ]}
                    className="w-[30%]"
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="State"
                    name="state"
                    rules={[
                        { required: true, message: "Please input your state" },
                    ]}
                    className="w-[30%] ml-[10px]"
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="City"
                    name="city"
                    rules={[
                        { required: true, message: "Please input your city" },
                    ]}
                    className="w-[30%] ml-[10px]"
                >
                    <Input />
                </Form.Item>
            </Row>

            <Form.Item
                name="ngo_approval_cert"
                label="Ngo Approval Certificate"
            >
                <Upload name="logo" listType="picture">
                    <Button icon={<UploadOutlined />}>Click to upload</Button>
                </Upload>
            </Form.Item>

            <div id="recaptcha-container" className="ml-[15%] mb-[10%]"></div>
            <Form.Item className="ml-[40%]">
                <Button
                    htmlType="submit"
                    type="primary"
                    className="rounded bg-[#52c41a] border-[#52c41a] hover:bg-[#73d13d] hover:border-[#73d13d] text-[15px]"
                >
                    Register
                </Button>
            </Form.Item>
            <Modal
                visible={otp}
                onCancel={() => setotp(false)}
                centered
                footer={null}
                title="Validate Otp"
            >
                <Form form={form2} onFinish={ValidateOtp}>
                    <Form.Item label="Enter Otp" name="otp">
                        <InputNumber />
                    </Form.Item>
                    <Form.Item>
                        <Button
                            htmlType="submit"
                            type="primary"
                            className="rounded bg-[#52c41a] border-[#52c41a] hover:bg-[#73d13d] hover:border-[#73d13d] text-[15px]"
                        >
                            Verify
                        </Button>
                    </Form.Item>
                </Form>
            </Modal>
        </Form>
    );
};

export default NgoRegister;
