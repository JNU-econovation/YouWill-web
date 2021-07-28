const healingTitle = document.getElementById('title-input');
const saveBtn = document.getElementById('save-btn');
const completeBtn = document.getElementById('complete-btn');
const dbRef = firebase.database().ref('Healing');
const editor = document.getElementsByClassName('.editor');

history.pushState(null, null, location.href);
window.onpopstate = function () {
  history.go(1);
};

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
  }
  firebase.auth().onAuthStateChanged(function (user) {
    const newHealingRef = dbRef.push();
    const uid = user.uid;
    newHealingRef.set({
      content: content,
      date: getCurrentDate(),
      id: newHealingRef.key,
      likes: {
        userId: true,
      },
      likesCount: 0,
      title: healingTitle.value,
      uid: uid,
    });
    console.log('데이터 넣기 성공');
  });
  window.location.href = 'healing_detail.html';
});
