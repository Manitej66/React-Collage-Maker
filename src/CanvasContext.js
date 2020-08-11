import React, { useState, createContext } from 'react'

export const CanvasContext = createContext()

export const CanvasProvider = (props) => {

    const [canvas, setCanvas] = useState([])
    return (
        <CanvasContext.Provider value={[canvas, setCanvas]}>
            {props.children}
        </CanvasContext.Provider>
    )
}

