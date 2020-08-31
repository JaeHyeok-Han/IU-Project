const video = document.querySelector('.videomain');
const videobox = document.querySelector('.videomain .videobox');
const left = document.querySelector('.videoicon .fa-chevron-left');
const right = document.querySelector('.videoicon .fa-chevron-right');

function replace(num) {
  videobox.style.transform = 'translateX('+num*-640+'px)';
}
right.addEventListener('click', function() {
  let num = video.getAttribute('data-num');
  if(num == 3)  {

  } else {
    num++;
    replace(num);
    video.setAttribute('data-num', num);
  }
});
left.addEventListener('click', function() {
  let num = video.getAttribute('data-num');
  if(num == 0)  {

  } else {
    num--;
    replace(num);
    video.setAttribute('data-num', num);
  }
});
