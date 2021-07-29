const saveBtn = document.getElementById('save-btn');
const completeBtn = document.getElementById('complete-btn');
const editor = document.getElementsByClassName('.editor');
const toast = document.querySelector('.toast');
const centered = document.getElementById('centered');
const closeBtn = document.querySelector('.close');

function getCurrentDate() {
  let date = new Date();
  let year = date.getFullYear().toString();

  let month = date.getMonth() + 1;
  month = month < 10 ? '0' + month.toString() : month.toString();

  let day = date.getDate();
  day = day < 10 ? '0' + day.toString() : day.toString();

  return year + month + day;
}

function openToast() {
  toast.classList.add('show');
  centered.style.opacity = 0.5;
  centered.style.pointerEvents = 'none';
}

function closeToast() {
  toast.classList.remove('show');
  centered.style.opacity = 1;
  centered.style.pointerEvents = 'auto';
  window.location.href = 'will_check.html';
}

completeBtn.addEventListener('click', function () {
  let content = window.editor.getData();
  if (!content) {
    alert('글의 내용을 입력해 주세요.');
  } else {
    firebase.auth().onAuthStateChanged(function (user) {
      const db = firebase.database();
      const uid = user.uid;
      const newWillRef = db.ref('Will').push();
      const postInfo = {
        content: content,
        date: getCurrentDate(),
      };
      newWillRef.set(uid);
      db.ref(`Will/${newWillRef.key}/` + uid).set(postInfo);
      localStorage.setItem('wrote', JSON.stringify(postInfo));
      openToast();
    });
  }
});
