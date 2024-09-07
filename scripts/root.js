function init() {
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia ) {
        return;
    }
    
    navigator.mediaDevices.getUserMedia({
        audio: false,
        video: {
            facingMode: { exact : "environment" }
        }
    })
    .then(camera_init)
    .catch(camera_init_failed);
}

window.onload = () => {
    init();
};