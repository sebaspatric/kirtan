window.onload = function() {
  var iframe = document.getElementById('spotify-player');
  var player = iframe.contentWindow;

  // Intentar iniciar la reproducción de la canción
  player.postMessage('{"command":"play"}', '*');
};
document.addEventListener('DOMContentLoaded', function() {
  function playAudio() {
    var audio = document.getElementById('audio-player');
    audio.play().catch(function(error) {
      console.log('Error al reproducir audio:', error);
    });
    document.removeEventListener('click', playAudio);
  }

  document.addEventListener('click', playAudio);
});
