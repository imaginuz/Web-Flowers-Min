document.addEventListener('DOMContentLoaded', function() {
    var audio = document.getElementById('background-music');

    // Función para reproducir la música
    function playMusic() {
        if (!audio.paused) return; // Si la música ya está reproduciéndose, no hagas nada
        audio.play(); // Iniciar la reproducción
    }

    // Event listener para iniciar la música cuando se hace clic en el h1
    document.getElementById('start-music').addEventListener('click', function() {
        playMusic();
    });
});
