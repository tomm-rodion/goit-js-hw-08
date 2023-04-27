import Player from '@vimeo/player';
import * as _ from 'lodash';
const iframe = document.querySelector('iframe');
const player = new Player(iframe);
console.log(player);

player.on('timeupdate', _.throttle(saveData, 1000));

function saveData(data) {
  console.log(data);
  localStorage.setItem('videoplayer-current-time', data.seconds);
}

player.on('play', data => {
  const savedTime = localStorage.getItem('videoplayer-current-time');
  if (data.seconds !== savedTime && savedTime) {
    player.setCurrentTime(savedTime);
  }
});
//test
const onPlay = function (data) {
  // data is an object containing properties specific to that event
};

player.on('play', onPlay);
