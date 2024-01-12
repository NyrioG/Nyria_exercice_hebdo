export default class Camera {
  constructor() {
    console.log("Camera.js");
    this.video = document.createElement("video");
    this.video.width = window.innerWidth;
    this.video.height = window.innerHeight;

    // Don't append the video element to the document body to hide it
    // document.body.appendChild(this.video);

    this.initWebcam();
  }

  initWebcam() {
    // fullscree webcam stream
    const constraints = {
      video: {
        width: window.innerWidth,
        height: window.innerHeight,
      },
    };
    navigator.mediaDevices.getUserMedia(constraints).then((stream) => {
      this.video.srcObject = stream;
      this.video.play();
      this.stream = stream; // Store the stream object for later use
    });
  }
}
