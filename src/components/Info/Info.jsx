import React from 'react';
import { observer } from 'mobx-react';
import { Headline, Subhead } from '@vkontakte/vkui';

import audioPlayerStore from '../../stores/AudioPlayerStore';
import formatTime from '../../utils/formatTime';

import './Info.css';

export const Info = observer(() => {
  return (
    <div className="player player__info">
      <div className="player player__title_artist">
        <Headline className="player player__title">
          {audioPlayerStore.currentTrack.title}
        </Headline>
        <Subhead className="player player__artist">
          {audioPlayerStore.currentTrack.artist}
        </Subhead>
      </div>
      <div className="player player__duration">
        <Subhead>
          {audioPlayerStore.isPlaying || audioPlayerStore.progress > 0
            ? formatTime(audioPlayerStore.progress)
            : formatTime(audioPlayerStore.currentTrack.duration)}
        </Subhead>
      </div>
    </div>
  );
});
