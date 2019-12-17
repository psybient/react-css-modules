import React from 'react';
import logo from './logo.svg';
//import './App.css'; // Import css modules stylesheet as styles
//import './styles/_test.scss';
// import js and css modularly, parsed by babel-plugin-import
// import { DatePicker } from 'antd';
//import DatePicker from 'antd/es/date-picker'; // for js
//import 'antd/es/date-picker/style/css'; // for css
import 'antd/dist/antd.css';
import { Layout, Menu, Breadcrumb } from 'antd';
const { Header, Content, Footer } = Layout;
//class App extends React.Component {

function App() {
  return (
    <Layout  style={{ backgroundColor:'rgba(30, 135, 40, 0.5)', minHeight:'100vh' , overflowY:'hidden' }}>
    <Header style={{ position: 'fixed', zIndex: 1, width: '100%', backgroundColor:'rgba(30, 135, 240, 0.5)' }}>
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
    <Content style={{ padding: '0 10px', marginTop: 64 }}>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>List</Breadcrumb.Item>
        <Breadcrumb.Item>App</Breadcrumb.Item>
      </Breadcrumb>
      <div style={{ background: '#fff', padding: 10, minHeight: '60vh' }}>Content
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
      Ant Design ©2018 Created by Ant UED <br />
      Ant Design ©2018 Created by Ant UED</div>
    </Content>
    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
  </Layout>
  );
}

export default App;
