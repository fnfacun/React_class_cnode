import React from 'react';
import { Link,withRouter } from 'react-router-dom';
import { Menu } from 'antd';
import tab from '../../common/components/tab';

class IndexMenu extends React.Component {
    constructor(props){
        super(props);
        let now = this.getNow(this.props.location);
        this.state = {
            now
        }
    }
    getNow(location){
        let now = location.pathname.split("/");
        return now[2];
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
            {tab.map((item)=>{
                if(!item.isIndex){
                   return false;
                };
                return (<Menu.Item key={item.tab}>
                    <Link to={"/index/" + item.tab}>{item.txt}</Link>
                </Menu.Item>)
            })}
        </Menu>)
    }
};

export default withRouter((props)=>{
    let { id, mode, location } = props;
    return (<IndexMenu  
        id={id}
        mode={mode}
        location={location}
    />)
});