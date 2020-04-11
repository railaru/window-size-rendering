import React from 'react';
import logo from './logo.svg';
import './App.css';
import MediaSizeRender from './mediaSizeRender';

function App() {
  return (
    <div className="App">
      <MediaSizeRender minWidth={1024} component={<p>desktop and up</p>} />
      <MediaSizeRender minWidth={768} maxWidth={1024} component={<p>tablet only</p>} />
      <MediaSizeRender maxWidth={1024} component={<p>tablet and lower</p>} />
    </div>
  );
}

export default App;
