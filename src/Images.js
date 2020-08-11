import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import { Row, Col, Button, Spin } from 'antd';
import { useContext } from 'react';
import { CanvasContext } from './CanvasContext'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { ReloadOutlined } from '@ant-design/icons'

const Images = () => {
    const [data, setData] = useState([])
    const [canvas, setCanvas] = useContext(CanvasContext)
    const [load, setLoad] = useState(true)
    const [refresh, setRefresh] = useState(true)
    const shuffle = (array) => array.sort(() => Math.random() - 0.5);

    useEffect(() => {
        (async () => {
            await Axios.get('https://picsum.photos/v2/list')
                .then(res => {
                    setData(shuffle(res.data).slice(0, 30));
                    setLoad(false)
                })
                .catch(err => console.log(err))
        })()
    }, [refresh])

    return (
        <div className="left-box">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }} >
                <h1>Gallery</h1>
                <Button icon={<ReloadOutlined />} onClick={() => {
                    setRefresh(prev => !prev);
                    setLoad(true)
                }}>Refresh</Button>
            </div>
            <hr></hr>
            {load ? (
                <div style={{ display: 'flex', justifyContent: 'space-around', flexDirection: 'column', alignItems: 'center' }}><Spin size="large" />  </div>
            ) : (
                    <div className="images">
                        <Row gutter={16}>
                            {data.map((item, index) => (
                                <Col key={index} xs={2} sm={4} md={6} lg={8} xl={8}>
                                    <LazyLoadImage
                                        alt={item.alt}
                                        height="250"
                                        onClick={() => setCanvas(prev => [...prev, item.download_url])}
                                        style={{ marginTop: 16, cursor: 'pointer' }}
                                        placeholder={<h1>loading...</h1>}
                                        src={item.download_url} // use normal <img> attributes as props
                                        width="100%" />
                                </Col>
                            ))}
                        </Row>
                    </div>
                )}
        </div>
    )
}

export default Images
