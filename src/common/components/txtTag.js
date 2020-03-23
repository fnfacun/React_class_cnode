import React from 'react';
import { Tag } from 'antd';

const tab = {
    top: {
        color: "magenta",
        title: "置顶"
    },
    good: {
        color: "geekblue",
        title: "精华"
    },
    job: {
        color: "cyan",
        title: "招聘"
    },
    share: {
        color: "purple",
        title: "分享"
    },
    ask: {
        color: "green",
        title: "问答"
    },
    dev: {
        color: "lime",
        title: "测试"
    }
}

function getTab(data){
    return (
        data.top ? "top" : data.good ? "good" : data.tab
    )
}

function TxtTag(props) {
    let { data } = props;
    let nowTab = tab[getTab(data)];
    return <Tag color={nowTab.color}>{nowTab.title}</Tag>
};

export default TxtTag;