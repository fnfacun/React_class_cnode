import React from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { List, Avatar } from 'antd';
import axios from 'axios';
import TxtTag from '../../common/components/txtTag';

class IndexList extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            page: 1
        }
        this.getData(this.props.tab);
    }
    // 是否重新渲染
    shouldComponentUpdate(nextProps){
        if(this.props.tab !== nextProps.tab){
            this.getData(nextProps.tab);
            return false;
        }
        return true
    }
    getData(tab){
        this.props.dispatch((dispatch)=>{
            dispatch({
                type: "LIST_UPDATA"
            })
            axios.get(`https://cnodejs.org/api/v1/topics?tab=${tab}&page=${this.state.page}&limit=15`).then(res=>{
                dispatch({
                    type: "LIST_UPDATA_SUCC",
                    data: res.data
                })
            }).catch(error=>{
                dispatch({
                    type: "LIST_UPDATA_ERROR",
                    data: error
                })
            });
        })
    };
    render(){
        let { data, loading } = this.props;
        return (<List
            loading={loading}
            dataSource={data.data}
            renderItem={item=>(
                <List.Item actions={[
                    "回复:"+ item.reply_count,
                    "访问:"+ item.visit_count
                ]} key={item.id}>
                    <List.Item.Meta
                        avatar={<Avatar src={item.author.avatar_url} />}
                        title={(<div><Link to={"/details/" + item.id}><TxtTag data={item} />{item.title}</Link></div>)}
                        description={<p><Link to={"/user/" + item.author.loginname}>{item.author.loginname}</Link>发表于{item.create_at.split("T")[0]}</p>}
                    />
                </List.Item>
            )}
        >
        </List>)
    }
};

export default connect(state=>state.list)(IndexList);