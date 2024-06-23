import React from 'react';
import { observer } from 'mobx-react';

import audioPlayerStore from '../../stores/AudioPlayerStore';

import './Equalizer.css';

export const Equalizer = observer(() => {
  return (
    <div className="player player__equalizer">
      <div
        className={`player player__bar 
        ${audioPlayerStore.progress > 0 ? 'player__bar_visible' : ''} 
        ${audioPlayerStore.isPlaying > 0 ? 'player__bar_active' : ''}
        `}
      />
      <div
        className={`player player__bar 
        ${audioPlayerStore.progress > 0 ? 'player__bar_visible' : ''} 
        ${audioPlayerStore.isPlaying > 0 ? 'player__bar_active' : ''}
        `}
      />
      <div
        className={`player player__bar 
        ${audioPlayerStore.progress > 0 ? 'player__bar_visible' : ''} 
        ${audioPlayerStore.isPlaying > 0 ? 'player__bar_active' : ''}
        `}
      />
      <div
        className={`player player__bar 
        ${audioPlayerStore.progress > 0 ? 'player__bar_visible' : ''} 
        ${audioPlayerStore.isPlaying > 0 ? 'player__bar_active' : ''}
        `}
      />
      <div
        className={`player player__bar 
        ${audioPlayerStore.progress > 0 ? 'player__bar_visible' : ''} 
        ${audioPlayerStore.isPlaying > 0 ? 'player__bar_active' : ''}
        `}
      />
    </div>
  );
});
