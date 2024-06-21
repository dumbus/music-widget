import React, { useRef, useEffect } from 'react';
import { observer } from 'mobx-react';

import { Image, SimpleCell, Headline, Subhead } from '@vkontakte/vkui';
import { Icon16MoreVertical } from '@vkontakte/icons';

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

  // const handlePlayPause = () => {
  //   if (audioPlayerStore.isPlaying) {
  //     audioPlayerStore.pause();
  //   } else {
  //     audioPlayerStore.play();
  //   }
  // };

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
      onClick={() => {}}
      before={
        <Image
          src={audioPlayerStore.currentTrack.cover}
          alt="cover"
          size={40}
        />
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
