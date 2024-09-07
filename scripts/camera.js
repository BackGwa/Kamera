function camera_init(stream) {
    viewport = document.querySelector(".viewport-camera");
    viewport.srcObject = stream;
    viewport.play();
}

function camera_init_failed(error) {
    console.error(error);
}