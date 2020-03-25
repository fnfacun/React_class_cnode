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

export default class TxtTag extends React.Component {
    render(){
        console.log(this.props.data)
        let nowTab = getTab(this.props.data);
        if(this.props.data.tab === undefined){
            return null;
        }
        return <Tag color={nowTab.color}>{nowTab.txt}</Tag>
    }
};