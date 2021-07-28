//////////////////////////////////
const toast=document.querySelector('.toast');
const endBtn=document.querySelector('.yellow-button');
const centered=document.getElementById('centered');
const closeBtn=document.querySelector('.close');
let clicked;

endBtn.addEventListener('click',function(e){
  console.log('토스트메시지');
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