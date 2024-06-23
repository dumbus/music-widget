import React from 'react';
import { observer } from 'mobx-react';
import { Image } from '@vkontakte/vkui';
import { Icon20PlayCircle, Icon20PauseCircle } from '@vkontakte/icons';

import audioPlayerStore from '../../stores/AudioPlayerStore';

import { Equalizer } from '..';

import './Cover.css';

export const Cover = observer(() => {
  return (
    <div
      className={`player player__overlay ${audioPlayerStore.isPlaying || audioPlayerStore.progress > 0 ? 'player__overlay_active' : ''}`}
    >
      <Image src={audioPlayerStore.currentTrack.cover} alt="cover" size={40} />
      {!audioPlayerStore.isPlaying && (
        <Icon20PlayCircle className="player player__cover_paused" />
      )}
      {audioPlayerStore.isPlaying && (
        <Icon20PauseCircle className="player player__cover_playing" />
      )}
      <Equalizer />
    </div>
  );
});
