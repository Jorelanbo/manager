import React from 'react';
import { Card, Button, message } from "antd";
import './ui.less';

/**
 *
 * 何时使用：
 * 1、可提供成功、警告和错误等反馈信息。
 * 2、顶部居中显示并自动消失，是一种不打断用户操作的轻量级提示方式。
 *
 */
export default class Messages extends React.Component{

    handleMessage = (type) => {
        // message.open({
        //     icon: <Icon type="loading-3-quarters" spin/>,
        //     content: 'This is a ' + type + ' message',
        // });
        message[type]('This is a ' + type + ' message');
    };

    render() {
        return (
            <div>
                <Card title="全局提示框" className="card-wrap">
                    <Button type="primary" onClick={() => this.handleMessage('info')}>Info</Button>
                    <Button type="primary" onClick={() => this.handleMessage('success')}>Success</Button>
                    <Button type="primary" onClick={() => this.handleMessage('warning')}>Warning</Button>
                    <Button type="primary" onClick={() => this.handleMessage('error')}>Error</Button>
                    <Button type="primary" onClick={() => this.handleMessage('loading')}>Loading</Button>
                </Card>
            </div>
        );
    }
}