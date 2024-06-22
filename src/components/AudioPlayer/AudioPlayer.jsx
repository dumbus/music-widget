import React, { useRef, useEffect } from 'react';
import { observer } from 'mobx-react';
import { SimpleCell } from '@vkontakte/vkui';

import audioPlayerStore from '../../stores/AudioPlayerStore';
import { Cover, Info, More } from '..';

import './AudioPlayer.css';

export const AudioPlayer = observer(() => {
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

  return (
    <SimpleCell
      className="player player__block"
      hasHover
      hasActive
      onClick={handlePlayPause}
      before={<Cover />}
      after={<More />}
    >
      <Info />

      <audio
        ref={audioRef}
        src={audioPlayerStore.currentTrack.src}
        onTimeUpdate={handleTimeUpdate}
      />
    </SimpleCell>
  );
});
