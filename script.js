const video = document.querySelector("video");

async function startCamera() {
  try {
    const stream = await navigator.mediaDevices.getUserMedia({
      video: true,
      audio: false
    });
    console.log(stream);
    
    video.srcObject = stream;
    video.style.transform = "scaleX(-1)";
  } catch (err) {
    console.error("Camera access denied:", err);
  }
}

startCamera();