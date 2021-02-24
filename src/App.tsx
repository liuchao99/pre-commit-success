import React, { useState, useEffect } from 'react';
import { Button, Modal } from 'antd';
import About from '@/components/About';
import scopedClasses from '@/utils/scopedClasses';
import './app.scss';

const sc = scopedClasses('app');
const App = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  useEffect(() => {}, [isModalVisible]);
  const handleCancel = () => {
    setIsModalVisible(false);
  };
  return (
    <div className={sc()}>
      liuchao1
      <p className={sc({ name: true, font: false })}>ccccc</p>
      <Button type="primary">Button</Button>
      <Button type="primary" onClick={showModal}>
        Open Modal
      </Button>
      <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
      <About />
    </div>
  );
};

export default App;
