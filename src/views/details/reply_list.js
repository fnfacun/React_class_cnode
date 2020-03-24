import React from 'react';
import { Link } from 'react-router-dom';
import { Card, List, Avatar } from 'antd';

function ReplyList(props){
    let { loading, replies, replyCount } = props;
    return (
        <Card type="inner" loading={loading} title={replyCount + '条回复'}>
            <List
                dataSource={replies} 
                itemLayout="vertical"
                className="replyList"
                renderItem={(item)=>(
                    <List.Item
                        key={item.id}
                        extra={item.ups.length > 0 ? <span>有{item.ups.length}人觉得很赞</span> : ""}
                    >
                        <List.Item.Meta 
                            avatar={<Avatar src={item.author.avatar_url} />}
                            description={<div>
                                <Link to={"/user/" + item.author.loginname}>{item.author.loginname}</Link>
                                <span> 发表于：{item.create_at.split("T")[0]}</span>
                            </div>}
                        />
                        <div dangerouslySetInnerHTML={{
                            __html: item.content
                        }}></div>
                    </List.Item>
            )}>
            </List>
        </Card>
    )
};

export default ReplyList;