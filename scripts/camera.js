function camera_init(stream) {
    viewport = document.querySelector(".viewport-camera");
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

    let image = canvas.toDataURL('image/png');
    let link = document.createElement('a');
    link.href = image;
    link.download = 'capture.png';
    link.click();
}