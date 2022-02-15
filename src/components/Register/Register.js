import React,{ useEffect,useState } from 'react'
import { Form, Input, Button, Row, Select, InputNumber, Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import CountryCodes from "../../CountryCodes";

const { Option } = Select

const Register = ({ type }) => {
    const [form] = Form.useForm();
    const {lat,setlat} = useState("")
    const {long,setlong} = useState("")
    const [country,setcountry] = useState("")
    const [initialValues, setInitialValues] = useState({});
    const [data,setdata] = useState([])

    function displayCountryCode(value) {
        var countrycode = document.getElementById("countrycode");
        console.log(countrycode.text)
        countrycode.text = value;
        console.log(countrycode.text)
      }

      useEffect(() => {
        form.setFieldsValue(initialValues);
      }, [form, initialValues]);

      

      const error = () => {
          console.log("dsa")
      }

      useEffect(() => {
          console.log("dfsa")
          //if (window.navigator.geolocation) {
            window.navigator.geolocation.getCurrentPosition((pos) => {
                const { latitude, longitude } = pos.coords;
                fetch(`https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=a3dc155e690648a98e2fb1693f4f6ef3`)
                .then(response => response.json())
                .then((res) => {
                    const city = res?.results[0]?.components?.city
                    const country = res?.results[0]?.components?.country
                    const state = res?.results[0]?.components?.state
                    setcountry(country)
                    setInitialValues(prevState => ({
                        ...prevState,
                        country: country,
                        state: state,
                        city: city
                    }));
                });
            },error)
           //}
           //else{
            //   handlePermission()
           //}
      },[])
      console.log(initialValues)

    const onFinish = (values) => {
        console.log(form.getFieldsValue())
    }

    const phone = (e) => {
        if(e.target.value.length >= 5){
            document.getElementById("num2").focus()
        }
    }

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
                    name="first_name"
                    label="First Name"
                    rules={[{ required: true, message: 'Please input your first name!' }]}
                    >
                        <Input placeholder="First Name"/>
                    </Form.Item>
                    <Form.Item
                    name="middle_name"
                    label="Middle Name"
                    rules={[{ message: 'Please input your middle name!' }]}
                    >
                        <Input placeholder="Middle Name"/>
                    </Form.Item>
                </Row>
                <Row className="justify-between">
                    <Form.Item
                    label="Last Name"
                    name="last_name"
                    rules={[{ message: 'Please input your last name!' }]}
                    >
                        <Input placeholder="Last Name"/>
                    </Form.Item>
                    <Form.Item
                    name="email"
                    label="Email"
                    rules={[{ required: true, message: 'Please input your email' }]}
                    >
                        <Input placeholder="Email"/>
                    </Form.Item>
                </Row>
                <Form.Item 
                    label="Mobile No"
                    name="number"
                    rules={[{ required: true,message: 'Please input your mobile number!' }]}
                >
                    <Row className="leading-[0]">
                    <Form.Item
                    name="countryCode"
                    rules={[{ required: true,message: 'Please input your mobile number!' }]}
                >
                    <Select id="countrycode" defaultValue="+91" style={{ width: 80 }} onChange={(value) => displayCountryCode(value)}>
                            {CountryCodes.map((country) => (
                                <Option value={country.dial_code}>
                                    {country.dial_code}
                                </Option>
                            ))}
                    </Select>
                </Form.Item>
                <Form.Item
                    name="num1"
                    rules={[{ required: true,message: 'Please input your mobile number!' }]}
                    className="w-[20%]"
                >
                    <Input id="num1" className="ml-[20px]" onChange={phone}/>
                </Form.Item>
                <p className="mt-[3%] ml-[40px]">-</p>
                <Form.Item 
                    name="num2"
                    rules={[{ required: true,message: 'Please input your mobile number!' }]}
                    className="w-[20%]"
                >
                    <Input className="ml-[20px]" id="num2"/>
                </Form.Item>
                </Row>
                </Form.Item>
                <Row>
                    <Form.Item
                    label="Country"
                    name="country"
                    rules={[{ required: true,message: 'Please input your country' }]}
                    className="w-[30%]"
                    >
                        <Input/>
                    </Form.Item>
                    <Form.Item
                    label="State"
                    name="state"
                    rules={[{ required: true,message: 'Please input your state' }]}
                    className="w-[30%] ml-[10px]"
                    >
                        <Input/>
                    </Form.Item>
                    <Form.Item
                    label="City"
                    name="city"
                    rules={[{ required: true,message: 'Please input your city' }]}
                    className="w-[30%] ml-[10px]"
                    >
                        <Input/>
                    </Form.Item>
                </Row>
                {(type=="User")?(
                <Form.Item
                    name="profile_pic"
                    label="Profile Photo"
                >
                    <Upload name="logo" listType="picture">
                        <Button icon={<UploadOutlined />}>Click to upload</Button>
                    </Upload>
                </Form.Item>):(
                    <Form.Item
                    name="approval_cert"
                    label="Ngo Approval Certificate"
                >
                    <Upload name="logo" listType="picture">
                        <Button icon={<UploadOutlined />}>Click to upload</Button>
                    </Upload>
                </Form.Item>
                )}
                <Form.Item className="ml-[40%]">
                <Button htmlType="submit" type="primary" 
                    className="rounded bg-[#52c41a] border-[#52c41a] hover:bg-[#73d13d] hover:border-[#73d13d] text-[15px]">
                     Register
                </Button>
                </Form.Item>
            </Form>
  )
            
}

export default Register;