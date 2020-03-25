import React from 'react';
import { connect } from 'react-redux';
import { Avatar, Row, Col } from 'antd';
import axios from 'axios';
import UserList from './user_list';

class User extends React.Component {
    constructor(props){
        super(props);
        let { id } = this.props.match.params;
        this.getData(id);
    }
    shouldComponentUpdate(nextProps){
        let { id } = this.props.match.params;
        let nextId = nextProps.match.params.id;
        if(id !== nextId){
            this.getData(nextId)
            return false;
        };
        return true;
    }
    getData(id){
        this.props.dispatch((dispatch)=>{
            dispatch({
                type: "USER_UPDATA"
            });
            axios.get(`https://cnodejs.org/api/v1/user/${id}`).then(res=>{
                dispatch({
                    type: "USER_UPDATA_SUCC",
                    data: res.data
                })
            }).catch(error=>{
                dispatch({
                    type: "USER_UPDATA_ERROR",
                    data: error
                })
            })
        })
    }
    render(){
        let { loading } = this.props;
        let { avatar_url, loginname, create_at, score, recent_topics, recent_replies } = this.props.data;
        return (<div className="wrap">
            <Avatar src={avatar_url} className="userAvatar" />
            <Row className="userInfo">
                <Col md={8}>用户名：<a>{loginname}</a></Col>
                <Col md={8}>积分：<a>{score}</a></Col>
                <Col md={8}>注册时间：<a>{create_at.split("T")[0]}</a></Col>
            </Row>
            <UserList 
                loading={loading} 
                title="最近创建的话题" 
                data={recent_topics}
            />
            <UserList 
                loading={loading} 
                title="最近回复话题"
                data={recent_replies}
            />
        </div>)
    }
};

export default connect(state=>state.user)(User);