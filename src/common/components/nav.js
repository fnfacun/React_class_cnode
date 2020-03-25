import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Menu } from 'antd'
import { HomeOutlined, BookOutlined, InfoCircleOutlined } from '@ant-design/icons';

class Nav extends React.Component {
    constructor(props){
        super(props);
        let now = this.getNow(this.props.location);
        this.state = {
            now
        }
    }
    getNow(location){
        let now = location.pathname.split("/");
        return now[1];
    }
    shouldComponentUpdate(nextProps){
        let now = this.getNow(nextProps.location);
        if(now !== this.state.now){
            this.setState({
                now
            })
            return false
        }
        return true
    }
    render(){
        let { id, mode } = this.props;
        return (<Menu id={id} mode={mode} selectedKeys={[this.state.now]}>
            <Menu.Item key="index">
                <Link to="/index/all"><HomeOutlined />首页</Link>
            </Menu.Item>
            <Menu.Item key="book">
                <Link to="/book"><BookOutlined />教程</Link>
            </Menu.Item>
            <Menu.Item key="about">
                <Link to="/about"><InfoCircleOutlined />关于</Link>
            </Menu.Item>
        </Menu>)
    }
};

export default withRouter((props)=>{
    let { mode, id, location } = props;
    return (<Nav 
        mode={mode}
        id={id}
        location={location}
    />)
});