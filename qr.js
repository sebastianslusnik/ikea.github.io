function isMobile() {
  const isAndroid = /Android/i.test(navigator.userAgent);
  const isiOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);
  return isAndroid || isiOS;
}

async function setupCamera() {
  const isPortrait = false; // do logic here

  let video = document.getElementById('video');

  console.log("Getting video");

  video.setAttribute('autoplay', '');
  video.setAttribute('muted', '');
  video.setAttribute('playsinline', '');

  console.log("Calling getUserMedia");

  return new Promise((resolve) => {
    (async() => {
      await navigator.mediaDevices.getUserMedia({
          'audio': false,
          'video': {
            facingMode: 'environment',
          },
        })
        .then((stream) => {
          console.log("Got getUserMedia stream");
          video.srcObject = stream;
          video.play();
          resolve(true);
        })
        .catch((err) => {
          console.log("Encountered getUserMedia error", err);
          resolve(false);
        });
    })();
  });

}

(async() => {
  const ret = await setupCamera();
  console.log(`Initialised camera: ${ret}`)
})();

function domReady(fn) {
    if (
        document.readyState === "complete" ||
        document.readyState === "interactive"
    ) {
        setTimeout(fn, 1000);
    } else {
        document.addEventListener("DOMContentLoaded", fn);
    }
}
domReady(function () {
    // If found you qr code
    function onScanSuccess(decodeText) {
        document.getElementById("result").innerHTML = "Your QR result is: " + decodeText;
    }
    let htmlscanner = new Html5QrcodeScanner(
        "my-qr-reader",
        { fps: 10, qrbos: 250 }
    );
    htmlscanner.render(onScanSuccess);
});
