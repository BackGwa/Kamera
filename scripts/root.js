function init() {
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
        return;
    }

    navigator.mediaDevices.getUserMedia({
        audio: false,
        video: {
            width: { ideal: 1920 },
            height: { ideal: 1440 },
            facingMode: { exact: "environment" }
        }
    })
    .then(camera_init)
    .catch(function (error) {
        if (error.name === "OverconstrainedError" || error.name === "NotFoundError") {
            navigator.mediaDevices.getUserMedia({
                audio: false,
                video: {
                    width: { ideal: 1920 },
                    height: { ideal: 1440 },
                    facingMode: "user"
                }
            })
            .then(camera_init)
            .catch(camera_init_failed);
        } else {
            camera_init_failed(error);
        }
    });
}

window.onload = () => {
    init();
};