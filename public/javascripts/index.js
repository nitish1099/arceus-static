jarallax(document.querySelectorAll('.js-jarallax'), {
    speed: 0.2
});

particlesJS.load('particles-js', './particles.json', function() {
  console.log('callback - particles.js config loaded');
});

var toggle = document.getElementById("nav-toggle");
toggle.onclick = function(){
  if (toggle.classList.contains('open')) {
    toggle.classList.remove("open");
    var navBar = document.getElementsByClassName("nav-bar")[0];
    navBar.classList.remove("open");
  } else {
    toggle.classList.add("open");
    var navBar = document.getElementsByClassName("nav-bar")[0];
    navBar.classList.add("open");
  }
};
