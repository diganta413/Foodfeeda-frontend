import React from 'react';
import { Tabs } from 'antd';
import { Modal } from "antd";
import Login from "../Login/Login";
import Register from "../Register/Register";

const { TabPane } = Tabs;

function AuthModal({ visible,handleClose }) {
  return <Modal visible={visible} onCancel={handleClose} centered footer={null}>
      <Tabs defaultActiveKey="1" centered>
    <TabPane tab="Login" key="1">
      <Login/>
    </TabPane>
    <TabPane tab="Register" key="2">
      <Register/>
    </TabPane>
  </Tabs>
  </Modal>;
}

export default AuthModal;