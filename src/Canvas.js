import React, { useContext } from 'react'
import { Button } from 'antd';
import { ClearOutlined } from '@ant-design/icons'
import { CanvasContext } from './CanvasContext';
import { Rnd } from 'react-rnd';

const Canvas = () => {
    const [canvas, setCanvas] = useContext(CanvasContext)

    return (
        <div className="right-box">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }} >
                <h1>Canvas</h1>
                <h3>No of Images Selected: {canvas.length}</h3>
                <Button icon={<ClearOutlined />} onClick={() => {
                    setCanvas([])
                }}>Clear</Button>
            </div>
            <hr></hr>

            {
                canvas.length > 0 ? (
                    <div className="b">
                        {canvas.map((item, index) => (
                            <Rnd
                                default={{
                                    x: 0,
                                    y: 0,
                                    height: 250,
                                    enableResizing: false,
                                }}>
                                <img style={{ margin: 10 }} onClick={() => console.log(item.url)} src={item} alt="Download" width='250' height='250' />
                            </Rnd>
                        ))}
                    </div>
                ) : <h1>No Images Selected</h1>
            }
        </div >
    )
}

export default Canvas
