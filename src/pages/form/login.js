import React from 'react'
import { Card, Button, Icon, Form, Input, Checkbox, message } from 'antd'
import './ui.less'

class LoginForm extends React.Component{

    constructor(props) {
        super(props);
    }

    handleSubmit = () => {
        let userInfo = this.props.form.getFieldsValue();
        this.props.form.validateFields((err, values) => {
            console.log(err);
            if (!err) {
                message.success(`${userInfo.userName},欢迎您！您的登录密码为${userInfo.password}`);
            }
        })
    };

    render() {
        const { getFieldDecorator } = this.props.form;
        console.log(this.props.form);
        return (
            <div>
                <Card title="登录行内表单" className="card-wrap">
                    <Form layout="inline">
                        <Form.Item>
                            <Input placeholder="请输入用户名"/>
                        </Form.Item>
                        <Form.Item>
                            <Input placeholder="请输入密码"/>
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary">登录</Button>
                        </Form.Item>
                    </Form>
                </Card>
                <Card title="登录水平表单" className="card-wrap">
                    <Form style={{width: 300}}>
                        <Form.Item>
                            {
                                getFieldDecorator('userName', {
                                    // initialValue: 'J S',
                                    rules: [
                                        {
                                            required: true,
                                            message: '用户名不能为空'
                                        },
                                        {
                                            min: 6,
                                            max: 12,
                                            message: '长度不在范围内'
                                        },
                                        {
                                            pattern: new RegExp('^\\w+$','g'),
                                            message: '用户名必须是字母'
                                        }
                                    ]
                                })(
                                    <Input prefix={<Icon type="user"/>} placeholder="请输入用户名"/>
                                    )
                            }
                        </Form.Item>
                        <Form.Item>
                            {
                                getFieldDecorator('password', {
                                    // initialValue: '123123',
                                    rules: []
                                })(
                                    <Input prefix={<Icon type="lock"/>} placeholder="请输入密码"/>
                                    )
                            }
                        </Form.Item>
                        <Form.Item>
                            {
                                getFieldDecorator('remember', {
                                    valuePropName: 'checked',
                                    initialValue: true,
                                    rules: []
                                })(
                                    <Checkbox>记住密码</Checkbox>
                                    )
                            }
                            <a href="#" style={{float: 'right'}}>忘记密码</a>
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" onClick={this.handleSubmit}>登录</Button>
                        </Form.Item>
                    </Form>
                </Card>
            </div>
        );
    }
}
export default Form.create()(LoginForm);