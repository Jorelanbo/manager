import React from 'react'
import {Card, Row, Col, Modal} from 'antd'
import './ui.less'

export default class Gallery extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            currentImg: '',
            modalVisible: false
        }
    }

    openGallery = (imgSrc) => {
        this.setState({
            currentImg: '/gallery/'+ imgSrc,
            modalVisible: true
        });
    };

    render() {
        const imgs = [
            ['1.png', '2.png', '3.png', '4.png', '5.png'],
            ['6.png', '7.png', '8.png', '9.png', '10.png'],
            ['11.png', '12.png', '13.png', '14.png', '15.png'],
            ['16.png', '17.png', '18.png', '19.png', '20.png'],
            ['21.png', '22.png', '23.png', '24.png', '25.png'],
        ];
        const imgList = imgs.map((list) => list.map((item) =>
            <Card
                key={Math.random()} // 指定key值
                hoverable
                style={{width:250,marginBottom: 30}}
                cover={<img alt="example" src={'/gallery/' + item}/>}
                onClick={() => {this.openGallery(item)}}
            >
                <Card.Meta
                    title="React Admin"
                    description="I'm JS!"
                />
            </Card>
        ));
        console.log(imgList);
        return (
            <div>
                <Row gutter={32}>
                    <Col md={5}>
                        {imgList[0]}
                    </Col>
                    <Col md={5}>
                        {imgList[1]}
                    </Col>
                    <Col md={5}>
                        {imgList[2]}
                    </Col>
                    <Col md={5}>
                        {imgList[3]}
                    </Col>
                    <Col md={4}>
                        {imgList[4]}
                    </Col>
                </Row>
                <Modal
                    height={300}
                    width={400}
                    visible={this.state.modalVisible}
                    onCancel={() => {
                        this.setState({
                            modalVisible: false
                        });
                    }}
                    footer={null}
                >
                    {<img src={this.state.currentImg} alt="" style={{width: '100%', marginTop: 30}}/>}
                </Modal>
            </div>
        );
    }
}