import { makeAutoObservable } from 'mobx';

import audio from '../audio/audio.mp3';
import cover from '../assets/cover.jpg';

class AudioPlayerStore {
  currentTrack = {
    title: 'Never Gonna Give You Up',
    artist: 'Rick Astley',
    src: audio,
    cover: cover,
    duration: 214
  };
  isPlaying = false;
  progress = 0;

  constructor() {
    makeAutoObservable(this);
  }

  play() {
    this.isPlaying = true;
  }

  pause() {
    this.isPlaying = false;
  }

  setProgress(progress) {
    this.progress = progress;
  }

  setDuration(duration) {
    this.duration = duration;
  }
}

const audioPlayerStore = new AudioPlayerStore();
export default audioPlayerStore;
