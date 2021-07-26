


/////////////////////////////////////
const triggerMargin = 150;
const potos = document.querySelectorAll('.part');
const bottom = document.querySelector('.bottom');

const setLayout = function () {
  for (const element of potos) {
    if (!element.classList.contains('show')) {
      if (
        window.innerHeight >
        element.getBoundingClientRect().top + triggerMargin
      ) {
        element.classList.add('show');
      }
    }
  }
  if (!bottom.classList.contains('show')) {
    if (window.innerHeight > bottom.getBoundingClientRect().top) {
      bottom.classList.add('show');
    }
  }
};

window.addEventListener('load', setLayout);
window.addEventListener('scroll', setLayout);

//////////////////////////////////
const toast=document.querySelector('.toast');
const endBtn=document.querySelector('.yellow-button');
const centered=document.getElementById('centered');
const closeBtn=document.querySelector('.close');
let clicked;

endBtn.addEventListener('click',function(e){
  toast.classList.add('show');
  centered.style.opacity=0.5;
  centered.style.pointerEvents='none';
})
closeBtn.onclick=function(){
  toast.classList.remove('show');
  centered.style.opacity=1;
  centered.style.pointerEvents='auto';
  window.location.href = 'will_detail.html';

}
