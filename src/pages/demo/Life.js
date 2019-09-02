import React from 'react'
import './life.css'
import {Button} from "antd";

export default class Life extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    }

    handleAdd() {
        this.setState({
            count: this.state.count + 1
        });
    }

    handleClick = () => {
        this.setState({
            count: this.state.count + 1
        });
    };

    render() {
        let style = {
          padding: 50
        };
        return <div className="content">
            <p>React生命周期介绍</p>
            <Button type="primary" onClick={this.handleAdd.bind(this)}>antd点击一下</Button>
            <button onClick={this.handleAdd.bind(this)}>点击一下</button>
            <button onClick={this.handleClick}>又点击了一下</button>
            <p>{this.state.count}</p>
        </div>
    }
}