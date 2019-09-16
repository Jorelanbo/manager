import React from 'react';
import { Card, Button, Tabs, message, Icon } from "antd";
import './ui.less';

export default class MyTabs extends React.Component{

    constructor(props) {
        super(props);
        this.newTabIndex = 0;
        const panes = [
            {title: 'Tab 1', content: 'Content of Tab Pane 1', key: '1'},
            {title: 'Tab 2', content: 'Content of Tab Pane 2', key: '2'}
        ];
        this.state = {
            activeKey: panes[0].key,
            panes
        }
    }

    handleOnChange = (key) => {
        console.log(key);
        message.info('您选择了页签：' + key);
    };

    onChange = activeKey => {
        this.setState({
            activeKey
        });
    };

    onEdit = (target, action) => {
        console.log('target:' + target + ', action:' + action);
        this[action](target);
    };

    remove = targetKey => {
        let { activeKey } = this.state;
        let lastIndex;
        this.state.panes.forEach((pane, i) => {
            if (pane.key === targetKey) {
                lastIndex = i - 1;
            }
        });
        const panes = this.state.panes.filter(pene => pene.key !== targetKey);
        if (panes.length && activeKey === targetKey) {
            if (lastIndex >= 0) {
                activeKey = panes[lastIndex].key;
            } else {
                activeKey = panes[0].key;
            }
        }
        this.setState({panes, activeKey});
    };

    add = () => {
        const { panes } = this.state;
        const activeKey = `newTab${this.newTabIndex++}`;
        panes.push({title: 'New Tab', content: 'New Tab Pane', key: activeKey});
        this.setState({panes, activeKey})
    };

    render() {
        return (
            <div>
                <Card title="tab标签页" className="card-wrap">
                    <Tabs defaultActiveKey="3" onChange={this.handleOnChange}>
                        <Tabs.TabPane tab="tab 1" key="1">Content of Tab Pane 1</Tabs.TabPane>
                        <Tabs.TabPane tab="tab 2" key="2">Content of Tab Pane 2</Tabs.TabPane>
                        <Tabs.TabPane tab="tab 3" key="3">Content of Tab Pane 3</Tabs.TabPane>
                        <Tabs.TabPane tab="tab 4" key="4" disabled>Content of Tab Pane 4</Tabs.TabPane>
                    </Tabs>
                </Card>
                <Card title="tab带图的标签页" className="card-wrap">
                    <Tabs defaultActiveKey="3" onChange={this.handleOnChange}>
                        <Tabs.TabPane tab={<span><Icon type="apple"/>tab</span>} key="1">Content of Tab Pane 1</Tabs.TabPane>
                        <Tabs.TabPane tab={<span><Icon type="android"/>tab</span>} key="2">Content of Tab Pane 2</Tabs.TabPane>
                    </Tabs>
                </Card>
                <Card title="tab可增删的标签页" className="card-wrap">
                    <div style={{marginBottom: 16}}>
                        <Button onClick={this.add}>Add</Button>
                    </div>
                    <Tabs
                        hideAdd={false}
                        type="editable-card"
                        activeKey={this.state.activeKey}
                        onChange={this.onChange}
                        onEdit={this.onEdit}
                    >
                        {this.state.panes.map(pane => (
                            <Tabs.TabPane tab={pane.title} key={pane.key}>{pane.content}</Tabs.TabPane>
                        ))}
                    </Tabs>
                </Card>
            </div>
        );
    }
}