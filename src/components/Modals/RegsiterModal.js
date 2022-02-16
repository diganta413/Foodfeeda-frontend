import React from 'react';
import { Tabs } from 'antd';
import { Modal } from "antd";
import Register from "../Register/Register";

const { TabPane } = Tabs;

function RegisterModal({ visible,handleClose }) {
  return <Modal visible={visible} onCancel={handleClose} centered footer={null}>
      <Tabs defaultActiveKey="1" centered>
    <TabPane tab="Register as User" key="1">
      <Register type="User"/>
    </TabPane>
    <TabPane tab="Register as Ngo" key="2">
      <Register type="Ngo"/>
    </TabPane>
  </Tabs>
  </Modal>;
}

export default RegisterModal;