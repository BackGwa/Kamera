function init() {
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia ) {
        return;
    }
    
    navigator.mediaDevices.getUserMedia({video:true})
        .then(camera_init)
        .catch(camera_init_failed);
}

window.onload = () => {
    init();
};