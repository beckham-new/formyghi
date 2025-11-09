// js/music.js
if (!window.globalMusic) {
  const music = new Audio("music/softlove.mp3");
  music.loop = true;
  music.volume = 0.6;
  music.play();
  window.globalMusic = music;
}
