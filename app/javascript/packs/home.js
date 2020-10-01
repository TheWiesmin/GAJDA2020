import AOS from 'aos';

document.addEventListener('DOMContentLoaded', function() {
  AOS.init({
    startEvent: 'turbolinks:load' // if you are using turbolinks
  });
});

// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop >= document.getElementById('logo').offsetTop || document.documentElement.scrollTop >= document.getElementById('logo').offsetTop) {
    document.getElementById("logo").classList.add("sticky");
    document.getElementById("top").style.display = "block";
}
}