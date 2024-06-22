import React from 'react';
import { observer } from 'mobx-react';
import { Subhead } from '@vkontakte/vkui';
import { Icon16MoreVertical } from '@vkontakte/icons';

import audioPlayerStore from '../../stores/AudioPlayerStore';
import formatTime from '../../utils/formatTime';

import './Info.css';

export const Info = observer(() => {
  return (
    <div className="player player__info">
      <Subhead className="player player__duration">
        {audioPlayerStore.isPlaying || audioPlayerStore.progress > 0
          ? formatTime(audioPlayerStore.progress)
          : formatTime(audioPlayerStore.duration)}
      </Subhead>
      <Icon16MoreVertical className="player player__more" />
    </div>
  );
});
