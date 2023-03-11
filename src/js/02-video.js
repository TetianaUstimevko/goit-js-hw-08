import throttle from 'lodash.throttle';
import Player from '@vimeo/player';
// console.log(Player);

const iframe = document.querySelector('#vimeo-player');

// Створюємо екземпляр класу
const player = new Player(iframe);
const CURRENT_TIME_KEY = 'videoplayer-current-time';


const onPlay = function (e) {
    localStorage.setItem(CURRENT_TIME_KEY, e.seconds);
};

player.on('timeupdate', throttle(onPlay, 1000));

player.setCurrentTime(JSON.parse(localStorage.getItem(CURRENT_TIME_KEY)) || 0);