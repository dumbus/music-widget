import React from 'react';
import {
  ConfigProvider,
  AdaptivityProvider,
  AppRoot,
  Div
} from '@vkontakte/vkui';

import './App.css';

import AudioPlayer from './components/AudioPlayer';

const App = () => {
  return (
    <ConfigProvider>
      <AdaptivityProvider>
        <AppRoot>
          <Div className="container">
            <AudioPlayer audioSrc="./audio/audio.mp3" />
          </Div>
        </AppRoot>
      </AdaptivityProvider>
    </ConfigProvider>
  );
};

export default App;
