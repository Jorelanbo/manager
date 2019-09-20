import React from 'react'
import axios from '../../axios'
import { Card, Button, Table, Tag, Divider, Modal, message } from 'antd'
import './ui.less'

export default class BasicTable extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            data2: [],
            selectedRowKeys: [],
            selectedCheckRowKeys: [],
        };
        this.request();
    }

    request = () => {
        axios.ajax({
            url: '/dataResource/tableData.json',
            data: {
                params: {
                    page: 1
                },
                isShowLoading: true
            }
        }).then(res => {
            if (res.status === 200) {
                let data = res.data;
                this.setState({
                    data2: data,
                    selectedRowKeys: [],
                    selectedCheckRowKeys: [],
                })
            }
        });
    };

    onRowClick = (record, index) => {
        let selectKey = [index];
        Modal.info({
            title: '信息',
            content: `用户名：${record.name}，用户地址：${record.address}`
        });
        this.setState({
            selectedRowKeys: selectKey,
            selectedItem: record
        });
        console.log(this.state);
    };

    handleDelete = () => {
        let selectedRows = this.state.selectedRows;
        let ids = [];
        selectedRows.map(item => {
            ids.push(item.key);
        });
        Modal.confirm({
            title: '删除提示',
            content: `您确定要删除这些数据吗？ ${ids.join(',')}`,
            onOk: () => {
                console.log(ids);
                this.request();
                message.success('删除成功！');
            }
        })
    };

    render() {
        const columns = [
            {
                title: 'Name',
                dataIndex: 'name',
                key: 'name',
                render: text => <a>{text}</a>,
            },
            {
                title: 'Age',
                dataIndex: 'age',
                key: 'age',
            },
            {
                title: 'Address',
                dataIndex: 'address',
                key: 'address',
            },
            {
                title: 'Tags',
                dataIndex: 'tags',
                key: "tags",
                render: tags => (
                    <span>
                        {
                            tags.map(tag => {
                                let color = tag.length > 5 ? 'geekblue' : 'green';
                                if (tag === 'loser') {
                                    color = 'volcano';
                                }
                                return (
                                    <Tag color={color} key={tag}>
                                        {tag.toUpperCase()}
                                    </Tag>
                                );
                            })
                        }
                    </span>
                )
            },
            {
                title: 'Action',
                key: 'action',
                render: ( record) => (
                    <span>
                        <a>Invite {record.name}</a>
                        <Divider type="vertical"/>
                        <a>Delete</a>
                    </span>
                )
            }
        ];
        const data = [
            {
                key: '1',
                name: 'John Brown',
                age: 32,
                address: 'New York No. 1 Lake Park',
                tags: ['nice', 'developer'],
            },
            {
                key: '2',
                name: 'Jim Green',
                age: 42,
                address: 'New York No. 1 Lake Park',
                tags: ['loser'],
            },
            {
                key: '3',
                name: 'Joe Black',
                age: 32,
                address: 'Sidney No. 1 Lake Park',
                tags: ['cool', 'teacher'],
            }
        ];
        const {selectedRowKeys} = this.state;
        const rowSelection = {
            type: 'radio',
            selectedRowKeys
        };

        const {selectedCheckRowKeys} = this.state;
        const rowCheckSelection = {
            type: 'checkbox',
            selectedRowKeys: selectedCheckRowKeys,
            onChange: (selectedRowKeys, selectedRows) => {
                console.log(selectedRowKeys);
                console.log(selectedRows);
                this.setState({
                    selectedCheckRowKeys: selectedRowKeys,
                    selectedRows
                })
            }
        };

        return (
            <div>
                <Card title="基础表格" className="card-wrap">
                    <Table
                        bordered={false}  // 是否有边界
                        columns={columns} // 列元素
                        dataSource={data} // 表格数据
                        pagination={false} // 是否分页
                    />
                </Card>
                <Card title="动态数据基础表格" className="card-wrap">
                    <Table
                        bordered={false}  // 是否有边界
                        columns={columns} // 列元素
                        dataSource={this.state.data2} // 表格数据
                        pagination={false} // 是否分页
                    />
                </Card>
                <Card title="单选基础数据表格" className="card-wrap">
                    <Table
                        bordered={false}  // 是否有边界
                        rowSelection={rowSelection}
                        onRow={(record, index) => {
                            return {
                                onClick: () => {this.onRowClick(record, record.key)},
                                onDoubleClick: event => {console.log(this.state)}
                            };
                        }}
                        columns={columns} // 列元素
                        dataSource={data} // 表格数据
                        pagination={false} // 是否分页
                    />
                </Card>
                <Card title="复选基础数据表格" className="card-wrap">
                    <Table
                        bordered={false}  // 是否有边界
                        rowSelection={rowCheckSelection}
                        columns={columns} // 列元素
                        dataSource={data} // 表格数据
                        pagination={false} // 是否分页
                    />
                </Card>
                <Card title="单项删除基础数据表格" className="card-wrap">
                    <div style={{marginBottom: 20}}>
                        <Button onClick={this.handleDelete}>删除</Button>
                    </div>
                    <Table
                        bordered={false}  // 是否有边界
                        rowSelection={rowCheckSelection}
                        columns={columns} // 列元素
                        dataSource={data} // 表格数据
                        pagination={false} // 是否分页
                    />
                </Card>
            </div>
        );
    }
}