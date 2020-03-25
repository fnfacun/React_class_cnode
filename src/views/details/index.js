import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import TxtDetails from '../../common/components/txt_detail';
import ReplyList from './reply_list';

class Details extends React.Component {
    constructor(props){
        super(props);
        let { id } = this.props.match.params;
        this.getData(id);
    }
    getData(id){
        this.props.dispatch((dispatch)=>{
            dispatch({
                type: "DETAILS_UPDATA"
            });
            axios.get(`https://cnodejs.org/api/v1/topic/${id}`).then(res=>{
                console.log(res.data)
                dispatch({
                    type: "DETAILS_UPDATA_SUCC",
                    data: res.data
                })
            }).catch(error=>{
                dispatch({
                    type: "DETAILS_UPDATA_ERROR",
                    data: error
                })
            })
        })
    }
    render(){
        let { loading, data } = this.props;
        return (<div className="wrap">
            <TxtDetails
                loading={loading}
                data={data} 
            />
            <ReplyList
                loading={loading}
                replies={data.replies} 
                replyCount={data.reply_count}
            />
        </div>)
    }
};

export default connect(state=>state.details)(Details);