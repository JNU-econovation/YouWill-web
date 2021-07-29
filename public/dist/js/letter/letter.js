const toMe = document.getElementById('toMe');
const toOther = document.getElementById('toOther');
const emailInput = document.getElementById('email-input');
const pad0 = document.getElementById('pad-0');
const pad1 = document.getElementById('pad-1');
const pad2 = document.getElementById('pad-2');
const writeBtn = document.getElementById('write-btn');
let clickedToMe = false;
let clickedToOther = false;
let paperType = -1;
let clickedPad0 = false;
let clickedPad1 = false;
let clickedPad2 = false;

toMe.addEventListener('click', function () {
  if (clickedToMe) {
    clickedToMe = false;
    toMe.style.backgroundColor = '#C7D4C0';
    toMe.style.color = '#191919';
  } else {
    if (clickedToOther) {
      clickedToOther = false;
      toOther.style.backgroundColor = '#f8f3cc';
    }
    clickedToMe = true;
    toMe.style.backgroundColor = '#748e64';
    toMe.style.color = '#fff';
  }
});

toOther.addEventListener('click', function () {
  if (clickedToOther) {
    clickedToOther = false;
    toOther.style.backgroundColor = '#f8f3cc';
  } else {
    if (clickedToMe) {
      clickedToMe = false;
      toMe.style.backgroundColor = '#C7D4C0';
      toMe.style.color = '#191919';
    }
    clickedToOther = true;
    toOther.style.backgroundColor = '#F2E581';
  }
});

pad0.addEventListener('click', function () {
  if (clickedPad0) {
    clickedPad0 = false;
    paperType = -1;
    pad0.style.border = '';
  } else {
    if (clickedPad1 || clickedPad2) {
      clickedPad1 = false;
      clickedPad2 = false;
      pad1.style.border = '';
      pad2.style.border = '';
    }
    clickedPad0 = true;
    paperType = 0;
    pad0.style.border = '3px solid #ACC69F';
    pad0.style.borderRadius = '5px';
  }
});

pad1.addEventListener('click', function () {
  if (clickedPad1) {
    clickedPad1 = false;
    paperType = -1;
    pad1.style.border = '';
  } else {
    if (clickedPad0 || clickedPad2) {
      clickedPad0 = false;
      clickedPad2 = false;
      pad0.style.border = '';
      pad2.style.border = '';
    }
    clickedPad1 = true;
    paperType = 1;
    pad1.style.border = '3px solid #ACC69F';
    pad1.style.borderRadius = '5px';
  }
});

pad2.addEventListener('click', function () {
  if (clickedPad2) {
    clickedPad2 = false;
    paperType = -1;
    pad2.style.border = '';
  } else {
    if (clickedPad0 || clickedPad1) {
      clickedPad0 = false;
      clickedPad1 = false;
      pad0.style.border = '';
      pad1.style.border = '';
    }
    clickedPad2 = true;
    paperType = 2;
    pad2.style.border = '3px solid #ACC69F';
    pad2.style.borderRadius = '5px';
  }
});

writeBtn.addEventListener('click', function () {
  let email = emailInput.value;
  const regExp =
    /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;

  if (!clickedToMe && !clickedToOther) {
    alert('누구에게 편지를 보낼지 선택해 주세요.');
  } else if (!email) {
    alert('받는 사람의 이메일 주소를 입력해 주세요.');
  } else if (!regExp.test(email)) {
    alert('올바르지 않은 이메일 형식입니다.');
  } else if (paperType === -1) {
    alert('사용할 편지지를 선택해 주세요.');
  } else {
    console.log(paperType, email);
    localStorage.setItem(
      'letterOption',
      JSON.stringify({
        paper_type: paperType,
        recipient_number: email,
      })
    );
    window.location.href = 'letter_write.html';
  }
});
