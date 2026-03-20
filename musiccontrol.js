const musica = document.getElementById('music');
const btnSom = document.getElementById('btn-som');
const iconeSom = document.getElementById('icon-som');

btnSom.addEventListener('click', function() {
    
    // Se a música estiver pausada...
    if (audio.paused) {
        audio.play(); // Toca a música
        // Remove a classe de mudo e adiciona a classe de som ligado
        iconeSom.classList.remove('ri-volume-mute-line');
        iconeSom.classList.add('ri-volume-up-line');
        
    } else {
        // Se a música já estiver tocando...
        audio.pause(); // Pausa a música
        // Remove a classe de som ligado e adiciona a classe de mudo
        iconeSom.classList.remove('ri-volume-up-line');
        iconeSom.classList.add('ri-volume-mute-line');
    }
});

musica.volume = 0.5;
