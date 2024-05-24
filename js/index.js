$(document).ready(function() {
    var musicEnabled = localStorage.getItem('musicEnabled') === 'true';
    var musicVolume = parseFloat(localStorage.getItem('musicVolume')) || 0.5;

    var musicAudio = new Audio(); 

    function playMusic(musicFile) {
        musicAudio.src = musicFile;
        musicAudio.loop = true; 
        musicAudio.volume = musicVolume; 
        musicAudio.play();
    }

    function stopMusic() {
        musicAudio.pause();
        musicAudio.currentTime = 0; 
    }

    $('#music-volume-slider').slider({
        range: "min",
        min: 0,
        max: 100,
        value: musicVolume * 100, 
        slide: function(event, ui) {
            adjustMusicVolume(ui.value);
        }
    });

    function adjustMusicVolume(value) {
        var volumeFraction = value / 100;
        if (!isNaN(volumeFraction) && isFinite(volumeFraction)) {
            musicAudio.volume = volumeFraction;
            localStorage.setItem('musicVolume', volumeFraction); 
        } else {
            console.error("Invalid audio volume: " + value);
        }
    }

    $('#volume-slider').on('input', function() {
        adjustMusicVolume(this.value);
    });

    // Music checkbox
    $('#music').click(function() {
        musicEnabled = !musicEnabled;
        localStorage.setItem('musicEnabled', musicEnabled);
        if (musicEnabled) {
            playMusic('../sounds/music.mp3'); 
        } else {
            stopMusic(); 
        }
    });

    if (musicEnabled) {
        playMusic('../sounds/music.mp3'); 
    }
});
