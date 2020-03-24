import React from 'react';
import data from './data';
import TxtDetails from '../../common/components/txt_detail';
import ReplyList from './reply_list';

function Details() {
    return (<div className="wrap">
        <TxtDetails
            loading={false}
            data={data.data} 
        />
        <ReplyList
            loading={false}
            replies={data.data.replies} 
            replyCount={data.data.reply_count}
        />
    </div>)
};

export default Details;