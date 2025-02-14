// Sebastián Slušníkf
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
  document.getElementById("second").style.opacity = "0";
  setTimeout(function() {
    document.getElementById("second").style.display = "none";
  }, 600);
  setTimeout(function() {
    document.getElementById("first").style.display = "flex";
  }, 650);
  setTimeout(function() {
    document.getElementById("first").style.opacity = "1";
  }, 750);
}
