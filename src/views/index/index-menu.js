import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'antd';

function IndexMenu(props) {
    let { id, mode } = props;
    return (<Menu id={id} mode={mode}>
        <Menu.Item className="ant-menu-item-selected">
            <Link to="/index/ask">全部</Link>
        </Menu.Item>
        <Menu.Item>
            <Link to="/index/good">精华</Link>
        </Menu.Item>
        <Menu.Item>
            <Link to="/index/ask">问答</Link>
        </Menu.Item>
        <Menu.Item>
            <Link to="/index/share">分享</Link>
        </Menu.Item>
        <Menu.Item>
            <Link to="/index/job">招聘</Link>
        </Menu.Item>
        <Menu.Item>
            <Link to="/index/dev">测试</Link>
        </Menu.Item>
    </Menu>)
};

export default IndexMenu;