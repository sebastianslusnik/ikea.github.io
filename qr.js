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

//remove front cameras
setInterval(() => {
    const selectElement = document.getElementById('html5-qrcode-select-camera');
    if (selectElement) {
        document.querySelectorAll("#html5-qrcode-select-camera option").forEach(option => {
            if (option.textContent.includes("front")) {
                option.remove();
            }
        });
        selectElement.selectedIndex = 0;
        clearInterval(this);
    }
}, 3000);
