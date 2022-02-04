import React from "react";
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined,LockOutlined } from "@ant-design/icons";

const Login = () => {
    const onFinish = (values) => {
        console.log('Received values of form: ', values);
      };


    return (
        <Form
      name="normal_login"
      initialValues={{ remember: true }}
      onFinish={onFinish}
    >
      <Form.Item
        name="username"
        rules={[{ required: true, message: 'Please input your Username!' }]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: 'Please input your Password!' }]}
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
        <Button htmlType="submit" type="primary" 
        className="bg-[#52c41a] border-[#52c41a] hover:bg-[#73d13d] hover:border-[#73d13d] text-[15px]">
            Log in
        </Button>
        
      </Form.Item>
    </Form>
    )
}

export default Login;