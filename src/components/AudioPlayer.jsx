import React, { useRef, useEffect } from 'react';
import { observer } from 'mobx-react';

import { Image, SimpleCell, Headline, Subhead } from '@vkontakte/vkui';
import {
  Icon16MoreVertical,
  Icon20PlayCircle,
  Icon20PauseCircle
} from '@vkontakte/icons';

import audioPlayerStore from '../stores/AudioPlayerStore';

import formatTime from '../utils/formatTime';

import './AudioPlayer.css';

const AudioPlayer = observer(() => {
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioPlayerStore.isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [audioPlayerStore.isPlaying]);

  const handlePlayPause = () => {
    if (audioPlayerStore.isPlaying) {
      audioPlayerStore.pause();
    } else {
      audioPlayerStore.play();
    }
  };

  const handleTimeUpdate = () => {
    audioPlayerStore.setProgress(audioRef.current.currentTime);
  };

  const handleLoadedMetadata = () => {
    audioPlayerStore.setDuration(audioRef.current.duration);
  };

  return (
    <SimpleCell
      className="player player__block"
      hasHover
      hasActive
      onClick={handlePlayPause}
      before={
        <div
          className={`player player__overlay ${audioPlayerStore.isPlaying || audioPlayerStore.progress > 0 ? 'player__overlay_active' : ''}`}
        >
          <Image
            src={audioPlayerStore.currentTrack.cover}
            alt="cover"
            size={40}
          />
          {!audioPlayerStore.isPlaying && (
            <Icon20PlayCircle className="player player__cover_paused" />
          )}
          {audioPlayerStore.isPlaying && (
            <Icon20PauseCircle className="player player__cover_playing" />
          )}
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
        </div>
      }
      after={
        <div className="player player__info">
          <Subhead className="player player__duration">
            {audioPlayerStore.isPlaying || audioPlayerStore.progress > 0
              ? formatTime(audioPlayerStore.progress)
              : formatTime(audioPlayerStore.duration)}
          </Subhead>
          <Icon16MoreVertical className="player player__more" />
        </div>
      }
    >
      <Headline className="player player__title">
        {audioPlayerStore.currentTrack.title}
      </Headline>
      <Subhead className="player player__artist">
        {audioPlayerStore.currentTrack.artist}
      </Subhead>

      <audio
        ref={audioRef}
        src={audioPlayerStore.currentTrack.src}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
      />
    </SimpleCell>
  );
});

export default AudioPlayer;
