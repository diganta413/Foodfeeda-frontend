import React from 'react';
import { Tabs } from 'antd';
import { Modal } from "antd";
import Login from "../Login/Login";

const { TabPane } = Tabs;

function LoginModal({ visible,handleClose }) {
  return <Modal visible={visible} onCancel={handleClose} centered footer={null}>
      <Tabs defaultActiveKey="1" centered>
    <TabPane tab="Login as User" key="1">
      <Login type="User"/>
    </TabPane>
    <TabPane tab="Login as Ngo" key="2">
      <Login type="Ngo"/>
    </TabPane>
  </Tabs>
  </Modal>;
}

export default LoginModal;