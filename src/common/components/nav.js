import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'antd'
import { HomeOutlined, BookOutlined, InfoCircleOutlined } from '@ant-design/icons';

function Nav(props) {
    let { id, mode } = props;
    return (<Menu id={id} mode={mode}>
        <Menu.Item>
            <Link to="/index/all"><HomeOutlined />首页</Link>
        </Menu.Item>
        <Menu.Item>
            <Link to="/book"><BookOutlined />教程</Link>
        </Menu.Item>
        <Menu.Item>
            <Link to="/about"><InfoCircleOutlined />关于</Link>
        </Menu.Item>
    </Menu>)
};

export default Nav;