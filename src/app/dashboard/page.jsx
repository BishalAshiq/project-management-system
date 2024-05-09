"use client"
import React, { useToken, useState } from 'react';
import { UploadOutlined, UserOutlined, VideoCameraOutlined, DownOutlined } from '@ant-design/icons';
import logo from "../../assests/projectsManagementslogo.png"
import damiphoto from "../../assests/images.jpg"
import { Layout, Menu, theme, Dropdown, Space } from 'antd';
import Image from 'next/image';
import Homesvg from '@/components/common/homesvg';
import MyTasksvg from '@/components/common/myTasksvg';
import Inboxsvg from './../../components/common/inboxsvg';
import Members from '@/components/common/members';
import Settingsvg from '@/components/common/settingsvg';
import Home from '@/components/Dashboard/Home';

import '../dashboard/dashboard.module.css';



const { Header, Content, Footer, Sider } = Layout;

// const items = [UserOutlined, VideoCameraOutlined, UploadOutlined, UserOutlined].map(
//   (icon, index) => ({
//     key: String(index + 1),
//     icon: React.createElement(icon),
//     label: `nav ${index + 1}`,
//   }),
// );




const itemsDrop = [
  {
    key: '1',
    type: 'group',
    label: 'Group title',
    children: [
      {
        key: '1-1',
        label: '1st menu item',
      },
      {
        key: '1-2',
        label: '2nd menu item',
      },
    ],
  },
  {
    key: '2',
    label: 'sub menu',
    children: [
      {
        key: '2-1',
        label: '3rd menu item',
      },
      {
        key: '2-2',
        label: '4th menu item',
      },
    ],
  },
  {
    key: '3',
    label: 'disabled sub menu',
    disabled: true,
    children: [
      {
        key: '3-1',
        label: '5d menu item',
      },
      {
        key: '3-2',
        label: '6th menu item',
      },
    ],
  },
];

const page = () => {

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();


  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };


  return (
    <div>
      <Layout>
        <Sider
          breakpoint="lg"
          collapsedWidth="0"
          onBreakpoint={(broken) => {
            console.log(broken);
          }}
          onCollapse={(collapsed, type) => {
            console.log(collapsed, type);
          }}
        >

          <div>
            <div className='flex justify-center items-center mt-6'>
              <Image width={100} height={100} src={logo.src} alt='' />
            </div>

            <div className="ml-5 mt-6 mb-1.5 text-white font-semibold">
              <h3>Main Menu</h3>
              <div className={`flex items-center gap-2 mt-6 ${activeTab === 1 ? 'active' : ''}`} onClick={() => handleTabClick(1)} style={{ cursor: 'pointer' }}>
                <span><Homesvg /></span>
                <p className={activeTab === 1 ? 'active-text' : ''}>Home</p>
              </div>
              <div className={`flex items-center gap-2 mt-6 ${activeTab === 2 ? 'active' : ''}`} onClick={() => handleTabClick(2)} style={{ cursor: 'pointer' }}>
                <span><MyTasksvg /></span>
                <p className={activeTab === 2 ? 'active-text' : ''}>My Task</p>
              </div>
              <div className={`flex items-center gap-2 mt-6 ${activeTab === 3 ? 'active' : ''}`} onClick={() => handleTabClick(3)} style={{ cursor: 'pointer' }}>
                <span><Inboxsvg /></span>
                <p className={activeTab === 3 ? 'active-text' : ''}>Inbox</p>
              </div>
              <div className={`flex items-center gap-2 mt-6 ${activeTab === 4 ? 'active' : ''}`} onClick={() => handleTabClick(4)} style={{ cursor: 'pointer' }}>
                <span><Members /></span>
                <p className={activeTab === 4 ? 'active-text' : ''}>Members</p>
              </div>
              <div className={`flex items-center gap-2 mt-6 ${activeTab === 5 ? 'active' : ''}`} onClick={() => handleTabClick(5)} style={{ cursor: 'pointer' }}>
                <span><Settingsvg /></span>
                <p className={activeTab === 5 ? 'active-text' : ''}>Settings</p>
              </div>
            </div>


          </div>
        </Sider>
        <Layout>

          <Content
            style={{
              // margin: '24px 16px 0',
            }}
          >
            <div className='py-4'>
              <h1 className="text-2xl font-semibold">Company Project</h1>
              <p>Last Update : 30 February 2024</p>
            </div>

            <div
              style={{
                // padding: 24,
                height: "100vh",
                background: colorBgContainer,
                borderRadius: borderRadiusLG,
              }}
            >
              <div>
                <div>
                  {activeTab === 1 && <div><Home/></div>}
                  {activeTab === 2 && <div>Working 2</div>}
                  {activeTab === 3 && <div>Working 3</div>}
                  {activeTab === 4 && <div>Working 4</div>}
                  {activeTab === 5 && <div>Working 5</div>}
                </div>
              </div>
            </div>
          </Content>

        </Layout>
      </Layout>
    </div>
  );
};

export default page;