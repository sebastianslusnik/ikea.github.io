
let scanner = new Instascan.Scanner({ video: document.getElementById('preview'), mirror: false });
    scanner.addListener('scan', function (content) {
      document.getElementById("result").innerHTML = content;
      document.getElementById("preview").style.borderColor = "forestgreen";
    });

    function start() {
      Instascan.Camera.getCameras().then(function (cameras) {
        if (cameras.length > 0) {
          // Debug: Output camera names
          cameras.forEach(element => {console.log(element.name);});

          // Choose the rear camera if available
          let selectedCamera = cameras[0];
          for (let i = 0; i < cameras.length; i++) {
            if (/back|rear|environment/i.test(cameras[i].name)) {
              selectedCamera = cameras[i];
              break;
            }
          }

          // Start the scanner with the selected camera
          scanner.start(selectedCamera);
        } else {
          console.error('No cameras found.');
        }
        document.getElementById("starter").style.display = "none";
        document.getElementById("stopper").style.display = "block";
      }).catch(function (e) {
        console.error(e);
      });
    }

    function stop() {
      scanner.stop().then(() => {
        console.log('Scanner stopped');
        document.getElementById("stopper").style.display = "none";
        document.getElementById("starter").style.display = "block";
      }).catch(function (e) {
        console.error('Error stopping scanner:', e);
      });
    }
