import React from 'react';
import { Card, Spin, Icon, Alert } from "antd";
import './ui.less';

export default class Loadings extends React.Component{
    render() {
        const icon = <Icon type="loading" style={{fontSize: 24}}/>;
        return (
            <div>
                <Card title="Spin用法" className="card-wrap">
                    <Spin size="small" style={{margin: "0 20px"}}/>
                    <Spin style={{margin: "0 20px"}}/>
                    <Spin size="large" style={{margin: "0 20px"}}/>
                    <Spin indicator={icon} style={{margin: "0 20px"}}/>
                </Card>
                <Card title="内容遮罩" className="card-wrap">
                    <Alert
                        message="react"
                        description="欢迎来到React高级实战课程"
                        type="info"
                        style={{margin: "20px 0"}}
                    />
                    <Spin>
                        <Alert
                            message="react"
                            description="欢迎来到React高级实战课程"
                            type="info"
                            style={{margin: "20px 0"}}
                        />
                    </Spin>
                    <Spin tip="加载中...">
                        <Alert
                            message="react"
                            description="欢迎来到React高级实战课程"
                            type="info"
                            style={{margin: "20px 0"}}
                        />
                    </Spin>
                    <Spin indicator={icon} tip="加载中...">
                        <Alert
                            message="react"
                            description="欢迎来到React高级实战课程"
                            type="info"
                            style={{margin: "20px 0"}}
                        />
                    </Spin>
                </Card>
            </div>
        );
    }
}