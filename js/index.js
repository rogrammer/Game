// common.js

$(document).ready(function() {
    var musicEnabled = localStorage.getItem('musicEnabled') === 'true';

        // Music volume slider
        $('#music-volume-slider').slider({
            range: "min",
            min: 0,
            max: 100,
            value: 50,
            slide: function(event, ui) {
                adjustMusicVolume(ui.value);
            }
        });
    
        function adjustMusicVolume() {
            var volume = $('#volume-slider').val();
            var volumeFraction = volume / 100;

            if (!isNaN(volumeFraction) && isFinite(volumeFraction)) {
                musicAudio.volume = volumeFraction;
            } else {
                console.error("Geçersiz ses seviyesi: " + volume);
            }
        }
    
        $('#volume-slider').on('input', adjustMusicVolume);
        
    // Music checkbox
    $('#music').click(function() {
        musicEnabled = !musicEnabled;
        localStorage.setItem('musicEnabled', musicEnabled);
        if (musicEnabled) {
            playMusic('../sounds/music.mp3'); // Change 'music.mp3' with your music file name
        } else {
            stopMusic(); // Stop music if unchecked
        }
    });

    var musicAudio = new Audio(); // Initialize audio element for music

    // Function to play sound
    function playSound(soundFile) {
        var audio = new Audio(soundFile);
        audio.play();
    }

    // Function to play music
    function playMusic(musicFile) {
        musicAudio.src = musicFile;
        musicAudio.loop = true; // Loop the music
        musicAudio.play();
    }

    // Function to stop music
    function stopMusic() {
        musicAudio.pause();
    }

    // Stopping the music because we just wanted to play in the game background
    if (musicEnabled && !musicAudio.paused) {
        stopMusic();
    }
});
