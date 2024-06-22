import React from 'react';
import {
  ConfigProvider,
  AdaptivityProvider,
  AppRoot,
  Div
} from '@vkontakte/vkui';

import { AudioPlayer } from './components';

const App = () => {
  return (
    <ConfigProvider>
      <AdaptivityProvider>
        <AppRoot>
          <Div className="container">
            <AudioPlayer />
          </Div>
        </AppRoot>
      </AdaptivityProvider>
    </ConfigProvider>
  );
};

export default App;
