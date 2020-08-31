const menuicon = document.querySelector('.side .menuicon');
const menubar = document.querySelector('.menu');
const menulist = document.querySelector('.menu .menulist');

function menuopen() {
  menubar.style.width = '230px';
}
function menuclose() {
  menubar.style.width = '0px';
}
function listopen() {
  menulist.style.top = '30px';
}
function listclose() {
  menulist.style.top = '-500px';
}

menuicon.addEventListener('click', function() {
  if(menuicon.getAttribute('data-state') == "close") {
    menuicon.style.color = 'var(--배경)';
    menuopen();
    listopen();
    menuicon.setAttribute('data-state', 'open');
  } else {
    menuicon.style.color = 'var(--black-color)';
    listclose();
    menuclose();
    menuicon.setAttribute('data-state', 'close');
  }
});
