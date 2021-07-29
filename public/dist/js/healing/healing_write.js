const healingTitle = document.getElementById('title-input');
const saveBtn = document.getElementById('save-btn');
const completeBtn = document.getElementById('complete-btn');
const dbRef = firebase.database().ref('Healing');
const editor = document.getElementsByClassName('.editor');

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
  if (!healingTitle.value) {
    alert('글의 제목을 입력해 주세요.');
  } else if (!content) {
    alert('글의 내용을 입력해 주세요.');
  } else {
    firebase.auth().onAuthStateChanged(function (user) {
      const newHealingRef = dbRef.push();
      const uid = user.uid;
      const postInfo = {
        content: content,
        date: getCurrentDate(),
        id: newHealingRef.key,
        likes: {
          userId: true,
        },
        likesCount: 0,
        title: healingTitle.value,
        uid: uid,
      };
      newHealingRef.set(postInfo);
      localStorage.setItem('wrote', JSON.stringify(postInfo));
      window.location.href = 'healing_check.html';
    });
  }
});
