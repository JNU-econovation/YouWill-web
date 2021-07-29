const toMe = document.getElementById('toMe');
const toOther = document.getElementById('toOther');
let clickedToMe = false;
let clickedToOther = false;

toMe.addEventListener('click', function () {
  if (clickedToMe) {
    clickedToMe = false;
    toMe.style.backgroundColor = '#acc69f';
    toMe.style.color = '#191919';
  } else {
    clickedToMe = true;
    toMe.style.backgroundColor = '#748e64';
    toMe.style.color = '#fff';
  }
});

toOther.addEventListener('click', function () {
  if (clickedToOther) {
    clickedToOther = false;
    toMe.style.backgroundColor = '#f8f3cc';
  } else {
    clickedToOther = true;
    toMe.style.backgroundColor = '#F2E581';
  }
});
