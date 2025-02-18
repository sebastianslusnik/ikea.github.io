let scanner = new Instascan.Scanner({ video: document.getElementById('preview'), mirror: false });
scanner.addListener('scan', function (content) {
  document.getElementById("result").innerHTML = content;
  document.getElementById("preview").borderColor = "forestgreen";
});
function start() {
  Instascan.Camera.getCameras().then(function (cameras) {
    if (cameras.length > 0) {
      cameras.forEach(element => {console.log(element.name);});
      scanner.start(cameras[0]);
    } else {
      console.error('No cameras found.');
    }
    document.getElementById("starter").style.display = "none";
    document.getElementById("stopper").style.display = "block";
  }).catch(function (e) {console.error(e);});
}
function stop() {
  Instascan.Camera.getCameras().then(function (cameras) {
    if (cameras.length > 0) {
      cameras.forEach(element => {console.log(element.name);});
      scanner.stop();
    } else {
      console.error('No cameras found.');
    }
    document.getElementById("stopper").style.display = "none";
    document.getElementById("starter").style.display = "block";
  }).catch(function (e) {console.error(e);});
}
