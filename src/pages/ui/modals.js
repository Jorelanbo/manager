import React from 'react'
import { Card, Button, Modal } from "antd";

export default class Modals extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            showModal1: false,
            showModal2: false,
            showModal3: false,
            showModal4: false,
        }
    }

    handleOpen = (type) => {
        this.setState({
            [type]: true
        });
    };

    handleConfirm = (type) => {
        Modal[type]({
            title: "确认",
            content: "你确认你学会了react吗？",
            onOk: () => {
                console.log("牛逼！");
            },
            onCancel: () => {
                console.log("加油！");
            }
        });
    };

    render() {
        return (
            <div>
                <Card title="基础模态框" className="card-wrap">
                    <Button type="primary" onClick={() => this.handleOpen('showModal1')}>Open</Button>
                    <Button type="primary" onClick={() => this.handleOpen('showModal2')}>自定义页脚</Button>
                    <Button type="primary" onClick={() => this.handleOpen('showModal3')}>顶部20px弹框</Button>
                    <Button type="primary" onClick={() => this.handleOpen('showModal4')}>水平垂直居中</Button>
                </Card>
                <Card title="信息确认框" className="card-wrap">
                    <Button type="primary" onClick={() => this.handleConfirm('confirm')}>Confirm</Button>
                    <Button type="primary" onClick={() => this.handleConfirm('info')}>Info</Button>
                    <Button type="primary" onClick={() => this.handleConfirm('success')}>Success</Button>
                    <Button type="primary" onClick={() => this.handleConfirm('warning')}>Warning</Button>
                    <Button type="primary" onClick={() => this.handleConfirm('error')}>Error</Button>
                </Card>
                <Modal
                title="React"
                    visible={this.state.showModal1}
                    onOk={() => {this.setState({showModal1: false})}}
                    onCancel={() => {this.setState({showModal1: false})}}>
                    <p>欢迎学习React！</p>
                </Modal>
                <Modal
                    title="React"
                    visible={this.state.showModal2}
                    okText="好的"
                    cancelText="算了"
                    onOk={() => {this.setState({showModal2: false})}}
                    onCancel={() => {this.setState({showModal2: false})}}>
                    <p>页脚文字不一样</p>
                </Modal>
                <Modal
                    title="React"
                    style={{top: 20}}
                    visible={this.state.showModal3}
                    onOk={() => {this.setState({showModal3: false})}}
                    onCancel={() => {this.setState({showModal3: false})}}>
                    <p>Some contents.(顶部20px弹框)</p>
                </Modal>
                <Modal
                    title="React"
                    wrapClassName="vertical-center-modal"
                    visible={this.state.showModal4}
                    onOk={() => {this.setState({showModal4: false})}}
                    onCancel={() => {this.setState({showModal4: false})}}>
                    <p>Some contents.(水平垂直居中)</p>
                </Modal>
            </div>
        );
    }
}