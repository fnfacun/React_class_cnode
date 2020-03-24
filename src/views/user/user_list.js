import React from 'react';
import { Link } from 'react-router-dom';
import { Card, List, Avatar } from 'antd';

function UserList(props) {
    let { loading, title, data } = props;
    return (
        <Card loading={loading} title={title} type="inner">
            <List
                className="userList"
                dataSource={data}
                renderItem={(item)=>{
                    return (<List.Item key={item.id}>
                    <Avatar src={item.author.avatar_url} />
                    <Link className="username" to={"/user/" + item.author.loginname}>
                        {item.author.loginname}
                    </Link>
                    <h4><Link to={"/details/"+ item.id}>{item.title}</Link></h4>
                    <time>最后回复时间：{item.last_reply_at.split("T")[0]}</time>
                </List.Item>)}}
            />
        </Card>
    )
};

export default UserList;