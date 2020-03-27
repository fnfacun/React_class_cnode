import React from 'react';
import { Tag } from 'antd';
import tab from './tab';

function getTab(data){
    let nowTab = (
        data.top ? 
            "top": 
            data.good? 
                "good": data.tab
    )
    return tab.find(item=>item.tab === nowTab);
}

function TxtTag(props) {
    let nowTab = getTab(props.data);
    if(props.data.tab === undefined){
        return null;
    }
    return <Tag color={nowTab.color}>{nowTab.txt}</Tag>
};

export default TxtTag;