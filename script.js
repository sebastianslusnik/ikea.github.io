// Sebastián Slušník
document.addEventListener('touchmove', function(event) {
    event.preventDefault();
}, { passive: false });

document.body.addEventListener('touchstart', function(e){
    var target = e.target;
    if (!isScrollable(target)) {
        e.preventDefault();
    }
});

function isScrollable(element) {
    while (element !== document.body) {
        const overflowY = window.getComputedStyle(element)['overflow-y'];
        if (overflowY === 'scroll' || overflowY === 'auto') {
            return true;
        }
        element = element.parentNode;
    }
    return false;
}
function submit() {
  document.getElementById("first").style.opacity = "0";
  setTimeout(function() {
    document.getElementById("first").style.display = "none";
  }, 600);
  setTimeout(function() {
    document.getElementById("second").style.display = "flex";
  }, 650);
  setTimeout(function() {
    document.getElementById("second").style.opacity = "1";
  }, 750);
}
function signout() {
  document.getElementById("third").style.opacity = "0";
  setTimeout(function() {
    document.getElementById("third").style.display = "none";
  }, 600);
  setTimeout(function() {
    document.getElementById("first").style.display = "flex";
  }, 650);
  setTimeout(function() {
    document.getElementById("first").style.opacity = "1";
  }, 750);
}
function menu() {
  document.getElementById("second").style.opacity = "0";
  setTimeout(function() {
    document.getElementById("second").style.display = "none";
  }, 600);
  setTimeout(function() {
    document.getElementById("third").style.display = "flex";
  }, 650);
  setTimeout(function() {
    document.getElementById("third").style.opacity = "1";
  }, 750);
}
function menuBack() {
  document.getElementById("third").style.opacity = "0";
  setTimeout(function() {
    document.getElementById("third").style.display = "none";
  }, 600);
  setTimeout(function() {
    document.getElementById("second").style.display = "flex";
  }, 650);
  setTimeout(function() {
    document.getElementById("second").style.opacity = "1";
  }, 750);
}
function openQR() {
  document.getElementById("third").style.opacity = "0";
  setTimeout(function() {
    document.getElementById("third").style.display = "none";
  }, 600);
  setTimeout(function() {
    document.getElementById("fourth").style.display = "flex";
  }, 650);
  setTimeout(function() {
    document.getElementById("fourth").style.opacity = "1";
  }, 750);
}
function closeQR() {
  document.getElementById("fourth").style.opacity = "0";
  setTimeout(function() {
    document.getElementById("fourth").style.display = "none";
  }, 600);
  setTimeout(function() {
    document.getElementById("third").style.display = "flex";
  }, 650);
  setTimeout(function() {
    document.getElementById("third").style.opacity = "1";
  }, 750);
}
