import React from 'react';
import { observer } from 'mobx-react';
import { Headline, Subhead } from '@vkontakte/vkui';

import audioPlayerStore from '../../stores/AudioPlayerStore';

import './Text.css';

export const Text = observer(() => {
  return (
    <>
      <Headline className="player player__title">
        {audioPlayerStore.currentTrack.title}
      </Headline>
      <Subhead className="player player__artist">
        {audioPlayerStore.currentTrack.artist}
      </Subhead>
    </>
  );
});
