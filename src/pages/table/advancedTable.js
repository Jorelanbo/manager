import React from 'react'
import axios from '../../axios'
import { Card, Button, Table, Tag, Divider, Modal, message } from 'antd'
import './ui.less'
import '../../utils/utils'
import utils from "../../utils/utils";

export default class AdvancedTable extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            sortOrder: {}
        }
    }

    handleOnChange = (pagination, filters, sorter) => {
        console.log(sorter);
        this.setState({
            sortOrder: sorter.order
        })
    };

    handleDelete = item => {
        console.log(item);
        Modal.confirm({
            title: '删除提示',
            content: `您确定要删除这条数据吗？ ${item.name}`,
            onOk: () => {
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
                width: 120
            },
            {
                title: 'Age',
                dataIndex: 'age',
                key: 'age',
                width: 60,
                sorter: (a, b) => {
                    return a.age - b.age;
                },
                sortOrder: this.state.sortOrder
            },
            {
                title: 'Address',
                dataIndex: 'address',
                key: 'address',
                width: 120
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
                ),
                width: 120
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
                ),
                width: 120
            }
        ];
        const columns2 = [
            {
                title: 'Name',
                dataIndex: 'name',
                key: 'name',
                render: text => <a>{text}</a>,
                width: 120,
                fixed: 'left'
            },
            {
                title: 'Age',
                dataIndex: 'age',
                key: 'age',
                width: 60,
                fixed: 'left'
            },
            {
                title: 'Address',
                dataIndex: 'address',
                key: 'address',
                width: 120
            },
            {
                title: 'Address',
                dataIndex: 'address',
                key: 'address',
                width: 120
            },
            {
                title: 'Address',
                dataIndex: 'address',
                key: 'address',
                width: 120
            },
            {
                title: 'Address',
                dataIndex: 'address',
                key: 'address',
                width: 120
            },
            {
                title: 'Address',
                dataIndex: 'address',
                key: 'address',
                width: 120
            },
            {
                title: 'Address',
                dataIndex: 'address',
                key: 'address',
                width: 120
            },
            {
                title: 'Address',
                dataIndex: 'address',
                key: 'address',
                width: 120
            },
            {
                title: 'Address',
                dataIndex: 'address',
                key: 'address',
                width: 120
            },
            {
                title: 'Address',
                dataIndex: 'address',
                key: 'address',
                width: 120
            },
            {
                title: 'Address',
                dataIndex: 'address',
                key: 'address',
                width: 120
            },
            {
                title: 'Address',
                dataIndex: 'address',
                key: 'address',
                width: 120
            },
            {
                title: 'Address',
                dataIndex: 'address',
                key: 'address',
                width: 120
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
                ),
                width: 120,
                fixed: 'right'
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
                ),
                width: 120,
                fixed: 'right'
            }
        ];
        const columns3 = [
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
                        <a onClick={() => {this.handleDelete(record)}}>Delete</a>
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
        const data2 = [
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
            },
            {
                key: '4',
                name: 'John Brown',
                age: 32,
                address: 'New York No. 1 Lake Park',
                tags: ['nice', 'developer'],
            },
            {
                key: '5',
                name: 'Jim Green',
                age: 42,
                address: 'New York No. 1 Lake Park',
                tags: ['loser'],
            },
            {
                key: '6',
                name: 'Joe Black',
                age: 32,
                address: 'Sidney No. 1 Lake Park',
                tags: ['cool', 'teacher'],
            },
            {
                key: '7',
                name: 'John Brown',
                age: 32,
                address: 'New York No. 1 Lake Park',
                tags: ['nice', 'developer'],
            },
            {
                key: '8',
                name: 'Jim Green',
                age: 42,
                address: 'New York No. 1 Lake Park',
                tags: ['loser'],
            },
            {
                key: '9',
                name: 'Joe Black',
                age: 32,
                address: 'Sidney No. 1 Lake Park',
                tags: ['cool', 'teacher'],
            },
            {
                key: '10',
                name: 'John Brown',
                age: 32,
                address: 'New York No. 1 Lake Park',
                tags: ['nice', 'developer'],
            },
            {
                key: '11',
                name: 'Jim Green',
                age: 42,
                address: 'New York No. 1 Lake Park',
                tags: ['loser'],
            },
            {
                key: '12',
                name: 'Joe Black',
                age: 32,
                address: 'Sidney No. 1 Lake Park',
                tags: ['cool', 'teacher'],
            },
            {
                key: '13',
                name: 'John Brown',
                age: 32,
                address: 'New York No. 1 Lake Park',
                tags: ['nice', 'developer'],
            },
            {
                key: '14',
                name: 'Jim Green',
                age: 42,
                address: 'New York No. 1 Lake Park',
                tags: ['loser'],
            },
            {
                key: '15',
                name: 'Joe Black',
                age: 32,
                address: 'Sidney No. 1 Lake Park',
                tags: ['cool', 'teacher'],
            },
            {
                key: '16',
                name: 'John Brown',
                age: 32,
                address: 'New York No. 1 Lake Park',
                tags: ['nice', 'developer'],
            },
            {
                key: '17',
                name: 'Jim Green',
                age: 42,
                address: 'New York No. 1 Lake Park',
                tags: ['loser'],
            },
            {
                key: '18',
                name: 'Joe Black',
                age: 32,
                address: 'Sidney No. 1 Lake Park',
                tags: ['cool', 'teacher'],
            },
            {
                key: '19',
                name: 'John Brown',
                age: 32,
                address: 'New York No. 1 Lake Park',
                tags: ['nice', 'developer'],
            },
            {
                key: '20',
                name: 'Jim Green',
                age: 42,
                address: 'New York No. 1 Lake Park',
                tags: ['loser'],
            },
            {
                key: '21',
                name: 'Joe Black',
                age: 32,
                address: 'Sidney No. 1 Lake Park',
                tags: ['cool', 'teacher'],
            }
        ];
        return (
            <div>
                <Card title="头部固定表格" className="card-wrap">
                    <Table
                        bordered={true}  // 是否有边界
                        columns={columns} // 列元素
                        dataSource={data2} // 表格数据
                        pagination={false} // 是否分页
                        scroll={{y:400}}
                    />
                </Card>
                <Card title="左侧固定表格" className="card-wrap">
                    <Table
                        bordered={false}  // 是否有边界
                        columns={columns2} // 列元素
                        dataSource={data2} // 表格数据
                        pagination={false} // 是否分页
                        scroll={{x:1880,y:400}}
                    />
                </Card>
                <Card title="年龄排序表格" className="card-wrap">
                    <Table
                        bordered={false}  // 是否有边界
                        columns={columns3} // 列元素
                        dataSource={data} // 表格数据
                        pagination={false} // 是否分页
                        onChange={this.handleOnChange}
                    />
                </Card>
                <Card title="条目删除表格" className="card-wrap">
                    <Table
                        bordered={false}  // 是否有边界
                        columns={columns3} // 列元素
                        dataSource={data} // 表格数据
                        pagination={false} // 是否分页
                    />
                </Card>
            </div>
        );
    }
}