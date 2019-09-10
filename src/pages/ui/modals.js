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

    handleOkModal = (type) => {
        this.setState({
            [type]: false
        });
    };

    handleCancelModal = (type) => {
        this.setState({
            [type]: false
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
                <Modal
                title="React"
                visible={this.state.showModal1}
                onOk={() => this.handleOkModal( 'showModal1')}
                onCancel={() => this.handleCancelModal( 'showModal1')}>
                    <p>Some contents.(Open)</p>
                </Modal>
                <Modal
                    title="React"
                    visible={this.state.showModal2}
                    onOk={() => this.handleOkModal( 'showModal2')}
                    onCancel={() => this.handleCancelModal( 'showModal2')}>
                    <p>Some contents.(自定义页脚)</p>
                </Modal>
                <Modal
                    title="React"
                    visible={this.state.showModal3}
                    onOk={() => this.handleOkModal( 'showModal3')}
                    onCancel={() => this.handleCancelModal( 'showModal3')}>
                    <p>Some contents.(顶部20px弹框)</p>
                </Modal>
                <Modal
                    title="React"
                    visible={this.state.showModal4}
                    onOk={() => this.handleOkModal( 'showModal4')}
                    onCancel={() => this.handleCancelModal( 'showModal4')}>
                    <p>Some contents.(水平垂直居中)</p>
                </Modal>
            </div>
        );
    }
}