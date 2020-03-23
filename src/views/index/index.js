import React from 'react';
import {Row, Col } from 'antd';
import IndexMenu from './index-menu';

function Index(){
    return (
        <Row className="wrap">
            <Col md={6} xs={0} className="indexSider">
                <IndexMenu id="indexMenu" mode="vertical" />
            </Col>
            <Col md={0} xs={24}>
                <IndexMenu id="indexXsMenu" mode="horizontal" />
            </Col>
            <Col md={18} xs={24} className="indexList">
                {[...('.').repeat(100)].map((item, index)=>{
                    return <li key={index}>这是第{index}个li</li>
                })}
            </Col>
        </Row>
    )
};

export default Index;