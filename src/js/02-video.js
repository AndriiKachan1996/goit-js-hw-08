import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const CURRENT_TIME = 'videoplayer-current-time';

player.on(
  'timeupdate',
  throttle(data => {
    localStorage.setItem(CURRENT_TIME, data.seconds);
  }, 1000)
);

if (CURRENT_TIME) {
  player.setCurrentTime(localStorage.getItem(CURRENT_TIME));
}
