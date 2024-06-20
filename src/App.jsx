import React from 'react';

import './App.css';

import AudioPlayer from './components/AudioPlayer';

const App = () => {
  return (
    <div className="container">
      <AudioPlayer audioSrc="./audio/audio.mp3" />
    </div>
  );
};

export default App;
