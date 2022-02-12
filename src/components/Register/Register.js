import React from 'react'
import { Form, Input, Button, Row, Select, InputNumber } from "antd";
import CountryCodes from "../../CountryCodes";

const { Option } = Select

const Register = () => {

    function displayCountryCode(value) {
        var countrycode = document.getElementById("countrycode");
        console.log(countrycode.text)
        countrycode.text = value;
        console.log(countrycode.text)
      }

    const onFinish = (values) => {
        
    }

  return (
            
            <Form
            layout="vertical"
            name="normal_login"
            initialValues={{ remember: true }}
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
                    
                >
                    <InputNumber className="ml-[20px]"/>
                </Form.Item>
                <p className="mt-[3%] ml-[17px]">-</p>
                <Form.Item 
                    name="num2"
                    rules={[{ required: true,message: 'Please input your mobile number!' }]}
                >
                    <InputNumber className="ml-[20px]"/>
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