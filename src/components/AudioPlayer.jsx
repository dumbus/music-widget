import React, { useRef, useEffect } from 'react';
import { observer } from 'mobx-react';

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
    <div className="player">
      <img
        className="player__image"
        src={audioPlayerStore.currentTrack.cover}
        alt="cover"
      />

      <div className="player__description">
        <div className="player__title">
          {audioPlayerStore.currentTrack.title}
        </div>
        <div className="player__artist">
          {audioPlayerStore.currentTrack.artist}
        </div>
      </div>

      <div className="player__options">
        <div className="player__duration">
          {audioPlayerStore.isPlaying || audioPlayerStore.progress > 0
            ? formatTime(audioPlayerStore.progress)
            : formatTime(audioPlayerStore.duration)}
        </div>
        <div className="player__more">
          <span className="player__dot"></span>
          <span className="player__dot"></span>
          <span className="player__dot"></span>
        </div>
      </div>

      <button onClick={handlePlayPause} className="player__button">
        {audioPlayerStore.isPlaying ? 'Pause' : 'Play'}
      </button>

      <audio
        ref={audioRef}
        src={audioPlayerStore.currentTrack.src}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
      />
    </div>
  );
});

export default AudioPlayer;
