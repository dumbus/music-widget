import React from 'react';
import { observer } from 'mobx-react';

import { Icon16MoreVertical } from '@vkontakte/icons';

import './More.css';

export const More = observer(() => {
  return (
    <div className="player player__more">
      <Icon16MoreVertical className="player player__more_icon" />
    </div>
  );
});
