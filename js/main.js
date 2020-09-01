const menuicon = document.querySelector('.side .menuicon');
const menubar = document.querySelector('.menu');
const menulist = document.querySelector('.menu .menulist');
const sns = document.querySelector('.side .fa-angle-up');
const snslist = document.querySelector('.side .snslist');

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
function iopen() {
  snslist.setAttribute('style', 'font-size: 1.2rem');
}
function iclose() {
  snslist.setAttribute('style', 'font-size: 0');
}

menuicon.addEventListener('click', function() {
  if(window.innerWidth>=400) {
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
  } else {
    if(menuicon.getAttribute('data-state') == "close") {
      menuicon.style.color = '#8dbffd';
      listopen();
      menuicon.setAttribute('data-state', 'open');
    } else {
      menuicon.style.color = 'var(--black-color)';
      listclose();
      menuicon.setAttribute('data-state', 'close');
    }
  }
});

sns.addEventListener('click', function() {
  if(sns.getAttribute('data-state') == "close") {
    iopen();
    sns.setAttribute('data-state', 'open');
  } else {
    iclose();
    sns.setAttribute('data-state', 'close');
  }
});
