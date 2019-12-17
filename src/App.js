import React from 'react';
import logo from './logo.svg';
import { Route } from 'react-router';

import './App.css'; // Import css modules stylesheet as styles
import 'antd/dist/antd.css';
import { Layout, Menu, Breadcrumb, Tabs, Icon } from 'antd';
const TabPane = Tabs.TabPane;
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;
//class App extends React.Component {
function callback(key) {
  console.log(key);
}

function App() {
  return (
    <Layout style={{ backgroundColor: 'rgba(30, 135, 40, 0.5)', minHeight: '100vh', overflowY: 'hidden' }}>
      <Header className="header" style={{ position: 'fixed', zIndex: 1, width: '100%', backgroundColor: 'rgba(30, 135, 240, 0.5)' }}>
        <div className="logo" />
        <Menu
          theme="light"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          style={{ lineHeight: '64px' }}
        >
          <Menu.Item key="1">nav 1</Menu.Item>
          <Menu.Item key="2">nav 2</Menu.Item>
          <Menu.Item key="3">nav 3</Menu.Item>
        </Menu>
      </Header>
      <Layout>
        <Sider width={200} style={{ background: '#fff' }}>
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%', borderRight: 0 }}
          >
            <SubMenu
              key="sub1"
              title={
                <span>
                  <Icon type="user" />
                  subnav 1
              </span>
              }
            >
              <Menu.Item key="1">option1</Menu.Item>
              <Menu.Item key="2">option2</Menu.Item>
              <Menu.Item key="3">option3</Menu.Item>
              <Menu.Item key="4">option4</Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub2"
              title={
                <span>
                  <Icon type="laptop" />
                  subnav 2
              </span>
              }
            >
              <Menu.Item key="5">option5</Menu.Item>
              <Menu.Item key="6">option6</Menu.Item>
              <Menu.Item key="7">option7</Menu.Item>
              <Menu.Item key="8">option8</Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub3"
              title={
                <span>
                  <Icon type="notification" />
                  subnav 3
              </span>
              }
            >
              <Menu.Item key="9">option9</Menu.Item>
              <Menu.Item key="10">option10</Menu.Item>
              <Menu.Item key="11">option11</Menu.Item>
              <Menu.Item key="12">option12</Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout style={{ padding: '0 24px 24px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <Content style={{ padding: '0 10px', marginTop: 64 }}>

            <div style={{ background: '#fff', padding: 10, minHeight: '60vh' }}>
              <Tabs defaultActiveKey="1" onChange={callback}>
                <TabPane tab="Tab 1" key="1"> Ant Design ©2018 Created by Ant UED <br />
                  Ant Design ©2018 Created by Ant UED <br />
                  Ant Design ©2018 Created by Ant UED <br />
                  Ant Design ©2018 Created by Ant UED <br />
                  Ant Design ©2018 Created by Ant UED <br />
                  Ant Design ©2018 Created by Ant UED <br />
                  Ant Design ©2018 Created by Ant UED <br />
                  Ant Design ©2018 Created by Ant UED <br />
                  Ant Design ©2018 Created by Ant UED <br />
                  Ant Design ©2018 Created by Ant UED <br />
                  Ant Design ©2018 Created by Ant UED <br />
                  Ant Design ©2018 Created by Ant UED <br />
                  Ant Design ©2018 Created by Ant UED <br />
                  Ant Design ©2018 Created by Ant UED <br />
                  Ant Design ©2018 Created by Ant UED <br />
                  Ant Design ©2018 Created by Ant UED <br />
                  Ant Design ©2018 Created by Ant UED <br />
                </TabPane>
                <TabPane tab="Tab 2" key="2">Content of Tab Pane 2</TabPane>
                <TabPane tab="Tab 3" key="3">Content of Tab Pane 3</TabPane>
              </Tabs>
            </div>

          </Content>
          <Footer style={{ textAlign: 'center' }}>This Is footer Copyright, social, etc..</Footer>
        </Layout>
      </Layout>
    </Layout>
  );
}

export default App;
