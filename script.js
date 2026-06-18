const video = document.querySelector("video");
const btn = document.querySelector("button");

let stream = null;

async function startCamera() {
  try {
    stream = await navigator.mediaDevices.getUserMedia({
      video: true,
      audio: false
    });

    video.srcObject = stream;
  } catch (err) {
    console.error("Camera access denied:", err);
  }
}

function stopCamera() {
  if (stream) {
    stream.getTracks().forEach(track => track.stop());
    video.srcObject = null;
    stream = null;
  }
}

btn.addEventListener("click", async () => {
  btn.classList.toggle("active");

  if (btn.classList.contains("active")) {
    await startCamera();
  } else {
    stopCamera();
  }
});