function camera_init(stream) {
    let viewport = document.querySelector(".viewport-camera");
    viewport.srcObject = stream;
    viewport.play();
}

function camera_init_failed(error) {
    alert(error);
}

function capture() {
    let canvas = document.createElement('canvas');
    let viewport = document.querySelector(".viewport-camera");

    canvas.width = viewport.videoWidth;
    canvas.height = viewport.videoHeight;

    let context = canvas.getContext('2d');
    context.drawImage(viewport, 0, 0, canvas.width, canvas.height);

    PlayAudio("res/shutter.mp3");

    setTimeout(() => {
        download(canvas);
    }, 750);
}

function download(canvas) {
    let image = canvas.toDataURL('image/png');
    let link = document.createElement('a');

    let now = new Date();
    let filename = `kamera_${now.getFullYear()}-${(now.getMonth() + 1).toString().padStart(2, '0')}-${now.getDate().toString().padStart(2, '0')}_` +
        `${now.getHours().toString().padStart(2, '0')}-${now.getMinutes().toString().padStart(2, '0')}-${now.getSeconds().toString().padStart(2, '0')}.png`;
    link.href = image;
    link.download = filename;
    link.click();
}