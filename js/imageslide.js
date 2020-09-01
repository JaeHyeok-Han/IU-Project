const img = document.querySelector('.imglist');
const imgbox = document.querySelector('.imglist .imgbox');
const left = document.querySelector('.galleryicon .fa-chevron-left');
const right = document.querySelector('.galleryicon .fa-chevron-right');

function replace(num) {
  imgbox.style.transform = 'translateX('+num*-820+'px)';
}
function replace2(num) {
  imgbox.style.transform = 'translateX('+num*-410+'px)';
}

right.addEventListener('click', function() {
  let num = img.getAttribute('data-num');
  if(num == 4)  {

  } else {
    if(window.innerWidth>=600) {
      num++;
      replace(num);
      img.setAttribute('data-num', num);
    }
    num++;
    replace2(num);
    img.setAttribute('data-num', num);
  }
});

left.addEventListener('click', function() {
  let num = img.getAttribute('data-num');
  if(num == 0)  {

  } else {
    if(window.innerWidth>=600) {
      num--;
      replace(num);
      img.setAttribute('data-num', num);
    }
    num--;
    replace2(num);
    img.setAttribute('data-num', num);
  }
});
