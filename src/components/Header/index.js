import React from 'react'
import './index.less'
import { Row, Col} from "antd";
import Util from '../../utils/utils'
import axios from '../../axios'

export default class Header extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            userName: 'Jorelanbo',
            sysTime: ''
        };
        setInterval(() => {
            let sysTime = Util.formatDateTime(new Date().getTime());
            this.setState({
                sysTime: sysTime
            })
        }, 1000);
        this.getWeatherAPIData();
    }

    /**
     * 通过百度获取天气信息
     */
    getWeatherAPIData() {
        let city = '武汉';
        axios.jsonp({
            url: 'http://api.map.baidu.com/telematics/v3/weather?location='+ encodeURIComponent(city) + '&output=json&ak=3p49MVra6urFRGOT9s8UBWr2'
        }).then(res => {
            if (res.status === 'success') {
                console.log(res);
                let data = res.results[0].weather_data[0];
                this.setState({
                    dayPictureUrl: data.dayPictureUrl,
                    weather: data.weather
                });
            }
        }).catch(err => {
            console.log(err)
        })
    }

    render() {
        return (
            <div className="header">
                <Row className="header-top">
                    <Col span={24}>
                        <span>欢迎，{this.state.userName}</span>
                        <a href="#">退出</a>
                    </Col>
                </Row>
                <Row className="breadcrumb">
                    <Col span={4} className="breadcrumb-title">
                        首页
                    </Col>
                    <Col span={20} className="weather">
                        <span className="date">{this.state.sysTime}</span>
                        <span className="weather-img">
                            <img src={this.state.dayPictureUrl}/>
                        </span>
                        <span className="weather-detail">
                            {this.state.weather}
                        </span>
                    </Col>
                </Row>
            </div>
        );
    }
}