import throttle from 'lodash.throttle';
import Player from '@vimeo/player';
import debounce from 'lodash.debounce';

const CURRENTTIME = 'videoplayer-current-time';

const iframe = document.querySelector('#vimeo-player');

const player = new Player(iframe);

updateCurrentPlayer();

player.on('timeupdate', throttle(onPlay, 1000));

function updateCurrentPlayer() {
  const isTime = localStorage.getItem(CURRENTTIME);

  if (!isTime) {
    return;
  }

  player.setCurrentTime(localStorage.getItem(CURRENTTIME));
}

function onPlay(e) {
  const currentTime = e.seconds;
  localStorage.setItem(CURRENTTIME, currentTime.toString());
}
