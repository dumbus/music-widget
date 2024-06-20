import React from 'react';

import './AudioPlayer.css';

import cover from '../assets/cover.jpg';
import audio from '../audio/audio.mp3';

const AudioPlayer = () => {
  return (
    <div className="player">
      <img className="player__image" src={cover} alt="cover" />

      <div className="player__description">
        <div className="player__name">Трек</div>
        <div className="player__author">Исполнитель</div>
      </div>

      <div className="player__options">
        <div className="player__duration">3:23</div>
        <div className="player__more">
          <span className="player__dot"></span>
          <span className="player__dot"></span>
          <span className="player__dot"></span>
        </div>
      </div>

      <button className="player__button">Play</button>

      <audio src={audio} />
    </div>
  );
};

export default AudioPlayer;
