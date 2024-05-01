// components/LoaderOverlay.js
import React from 'react';
import { LoadingOutlined } from '@ant-design/icons';
import { Overlay } from 'react-loading-overlay';
// import 'antd/dist/antd.css';

const LoaderOverlay = ({ loading, children }) => {
  return (
    <Overlay active={loading} spinner={<LoadingOutlined style={{ fontSize: 24 }} spin />}>
      {children}
    </Overlay>
  );
};

export default LoaderOverlay;
