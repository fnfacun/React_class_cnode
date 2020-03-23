import React from 'react';
import { Card } from 'antd';

function PublicCard(props) {
    let { data } = props;
    return (<div className="wrap">
        {data.map((item, index)=>{
            return (<Card key={index} title={item.title} loading={false} type="inner">
                <div dangerouslySetInnerHTML={{
                    __html: item.content
                }}></div>
            </Card>)
        })}
    </div>)
};

export default PublicCard;