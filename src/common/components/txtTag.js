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
    return tab.filter(item=>item.tab === nowTab)[0];
}

export default class TxtTag extends React.Component {
    render(){
        let nowTab = getTab(this.props.data);
        return <Tag color={nowTab.color}>{nowTab.txt}</Tag>
    }
};