function playSound(filePath) {
  const player = document.getElementById('audio-player');
  player.src = filePath;
  player.play();
}
