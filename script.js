window.onload = function() {
  var iframe = document.getElementById('spotify-player');
  var player = iframe.contentWindow;

  // Intentar iniciar la reproducción de la canción
  player.postMessage('{"command":"play"}', '*');
};
