import React from 'react';
import Images from './Images';
import './App.css'
import Canvas from './Canvas';
import { CanvasProvider } from './CanvasContext';

function App() {
  return (
    <CanvasProvider>
      <div className="main-box">
        <Images />
        <Canvas />
      </div>
    </CanvasProvider>
  );
}

export default App;
