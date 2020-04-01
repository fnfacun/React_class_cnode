import React, { Component } from 'react';
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

class TxtTag extends Component {
    render(){
        let nowTab = getTab(this.props.data);
        if(this.props.data.tab === undefined)return null;
        return <Tag color={nowTab.color}>{nowTab.txt}</Tag>
    }
};

export default TxtTag;