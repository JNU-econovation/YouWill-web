const triggerMargin = 150;
const potos = document.querySelectorAll('.part');
const bottom = document.querySelector('.bottom');

const setLayout = function () {
  for (const element of potos) {
    if (!element.classList.contains('show')) {
      if (window.innerHeight >element.getBoundingClientRect().top + triggerMargin) {
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


const tost=document.getElementById('tost');
const endBtn=document.querySelector('.yellow-button');

endBtn.addEventListener('click',function(e){
  tost.style.display='block'
  
 
  
})
tost.addEventListener('click',function(e){
  tost.style.display='none';
  endBtn.onclick=function(){
  window.location.href = 'will_detail.html';
}
})

