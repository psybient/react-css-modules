import React from 'react'
import { Route } from 'react-router'

import './App.css' // Import css modules stylesheet as styles
import 'antd/dist/antd.css'

import { Layout, Menu, Breadcrumb, Tabs, Icon } from 'antd'

import DragableTable from './components/DragableTable'
import Increment from './components/Increment'
import TimeLine from './components/TimeLine'
import SiteCarousel from './components/SiteCarouse'
import SiteSidebar from './components/SiteSidebar'

const TabPane = Tabs.TabPane;
const { Header, Content, Footer } = Layout;


function App() {
  return (
    <Layout style={{ backgroundColor: 'rgba(30, 135, 40, 0.5)', minHeight: '100vh', overflowY: 'hidden' }}>
      <Header className="header" style={{ position: 'fixed', zIndex: 2, width: '100%' }}>
        <div className="logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          style={{ lineHeight: '64px',textAlign:"right", direction:"rtl", width: '100%'}}
        >
          <Menu.Item key="1">nav 1</Menu.Item>
          <Menu.Item key="2">nav 2</Menu.Item>
          <Menu.Item key="3">nav 3</Menu.Item>
        </Menu>
      </Header>
      <Layout>
       <SiteSidebar width={"26%"} />

        <Layout style={{ padding: '0 2px 2px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <Content style={{ padding: '0 0', marginTop: 9 }}>

            <div style={{ background: '#fff', padding: 0, minHeight: '60vh' }}>
              <Tabs defaultActiveKey="1" onChange={callback}>
                <TabPane tab="Tab 1" key="1">
                  <SiteCarousel effect="fade" />
                  <TimeLine />
                </TabPane>

                <TabPane tab="Tab 2" key="2">
                  <DragableTable />
                </TabPane>

                <TabPane tab="Tab 3" key="3">
                  <Increment />
                </TabPane>

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

function callback(key) {
  console.log(key);
}
