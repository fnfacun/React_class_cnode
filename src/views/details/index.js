import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Avatar } from 'antd';
import TxtTag from '../../common/components/txtTag';
import data from './data';

function Details() {
    // 模板
    let title = (<div>
        <h1>{data.data.title}</h1>
        <div style={{ display: "flex", alignItems: 'center', fontSize: '12px'}}>
            <TxtTag data={data.data} />
            <Avatar src={data.data.author.avatar_url} />
            <Link to={"/user/" + data.data.author.loginname} style={{ margin: '0 6px' }}>{data.data.author.loginname}</Link>
            发表于: {data.data.create_at.split("T")[0]}
        </div>
    </div>);
    return (<div className="wrap">
        <Card title={title}>
            <div dangerouslySetInnerHTML={{
                __html: data.data.content
            }}></div>
        </Card>
    </div>)
};

export default Details;