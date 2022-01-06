import React from 'react';

import './App.css';

function App() {
  const MINIMAP_DIMENSIONS = { width: 160, height: 220 };

  return (
    <div
      className="App"
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <div
        id="minimap"
        style={{
          width: MINIMAP_DIMENSIONS.width,
          height: MINIMAP_DIMENSIONS.height,
          background: '#a00',
          position: 'relative',
          // overflow: 'hidden',
        }}
      >
        <div
          id="wrapper-grid"
          style={{
            position: 'absolute',
            top: -MINIMAP_DIMENSIONS.height,
            left: -MINIMAP_DIMENSIONS.width,

            display: 'grid',
            gridTemplateColumns: `${MINIMAP_DIMENSIONS.width}px 150px ${MINIMAP_DIMENSIONS.width}px`,
            gridTemplateRows: `${MINIMAP_DIMENSIONS.height}px 80px ${MINIMAP_DIMENSIONS.height}px`,
          }}
        >
          <div id="wrapper" style={{ background: '#0005' }}></div>
          <div id="wrapper" style={{ background: '#0005' }}></div>
          <div id="wrapper" style={{ background: '#0005' }}></div>
          <div id="wrapper" style={{ background: '#0005' }}></div>
          <div id="wrapper" style={{ background: 'transparent' }}></div>
          <div id="wrapper" style={{ background: '#0005' }}></div>
          <div id="wrapper" style={{ background: '#0005' }}></div>
          <div id="wrapper" style={{ background: '#0005' }}></div>
          <div id="wrapper" style={{ background: '#0005' }}></div>
        </div>
      </div>
    </div>
  );
}

export default App;
