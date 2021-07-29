const saveBtn = document.getElementById('save-btn');
const completeBtn = document.getElementById('complete-btn');
const editor = document.getElementsByClassName('.editor');
const letterOption = JSON.parse(localStorage.getItem('letterOption'));

function getCurrentDate() {
  let date = new Date();
  let year = date.getFullYear().toString();

  let month = date.getMonth() + 1;
  month = month < 10 ? '0' + month.toString() : month.toString();

  let day = date.getDate();
  day = day < 10 ? '0' + day.toString() : day.toString();

  return year + month + day;
}

completeBtn.addEventListener('click', function () {
  let content = window.editor.getData();
  if (!content) {
    alert('글의 내용을 입력해 주세요.');
  } else {
    firebase.auth().onAuthStateChanged(function (user) {
      const db = firebase.database();
      const uid = user.uid;
      const newLetterRef = db.ref('Letter').push();
      const newLetterBoxRef = db.ref('LetterBox').push();
      const postInfo = {
        content: content,
        paper_type: letterOption.paper_type,
        recipient_number: letterOption.recipient_number,
        send_date: '000',
        write_date: getCurrentDate(),
      };
      newLetterRef.set(uid);
      newLetterBoxRef.set(uid);
      db.ref(`Letter/${newLetterRef.key}/` + uid).set(postInfo);
      db.ref(`LetterBox/${newLetterBoxRef.key}/` + uid).set(postInfo);
      localStorage.setItem('wrote', JSON.stringify(postInfo));
      setTimeout(function () {
        window.location.href = 'letter_check.html';
      }, 3000);
    });
  }
});
