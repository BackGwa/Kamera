function PlayAudio(src, volume = 1.0) {
    try {
        var audio = document.createElement('audio');
        audio.src = src;
        document.body.appendChild(audio);
        audio.play();
        audio.volume = volume;
        audio.onended = () => {
            audio.remove();
        };
    } catch (e) {
        console.error(e);
    }
}