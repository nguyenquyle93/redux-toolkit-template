import React, {useState} from 'react';
import { Menu, Button } from 'antd';
import {
  AppstoreOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  PieChartOutlined,
  DesktopOutlined,
  ContainerOutlined,
  MailOutlined,
} from '@ant-design/icons';
import {
    Link
  } from "react-router-dom";

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  const handleSelect = (event) => {
      console.log(event.key)
  }

    return (
      <div style={{ width: 256, height: '100vh',background: "#001529" }}>
        <Menu
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode="inline"
          theme="dark"
          inlineCollapsed={collapsed}
          onClick={handleSelect}
          height={'100%'}
        >
          <Menu.Item key="home" icon={<PieChartOutlined />}>
          <Link to="/">Home</Link>
          </Menu.Item>
          <Menu.Item key="address" icon={<PieChartOutlined />}>
          <Link to="/address">address</Link>
          </Menu.Item>
          <Menu.Item key="products" icon={<DesktopOutlined />}>
          <Link to="/products">products</Link>
          </Menu.Item>
          <Menu.Item key="category" icon={<ContainerOutlined />}>
          <Link to="/category">category</Link>
          </Menu.Item>
        </Menu>
      </div>
    );
  }

  export default Sidebar;
