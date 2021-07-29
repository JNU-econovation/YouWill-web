const healingContainer = document.getElementById('container');
const pencilBtn = document.getElementById('pencil-btn');
let wrote = JSON.parse(localStorage.getItem('wrote'));

history.pushState(null, null, location.href);
window.onpopstate = function () {
  history.go(1);
};

firebase.auth().onAuthStateChanged(function (user) {
  if (user) {
    pencilBtn.setAttribute('onclick', "location.href='healing_write.html'");
  } else {
    pencilBtn.setAttribute('onclick', '');
    pencilBtn.addEventListener('click', function () {
      alert('로그인 후 글을 작성할 수 있습니다.');
      window.location.href = '../signin/';
    });
  }
});

function like(uid) {
  firebase.auth().onAuthStateChanged(function (user) {
    if (user && user.uid === uid) {
      alert('자신이 작성한 글은 추천할 수 없습니다.');
    }
  });
}

function setLayout(postInfo) {
  if (postInfo) {
    const postItem = document.createElement('table');
    postItem.innerHTML = `
    <tr class="post-title-date">
      <td><h3>${postInfo.title}</h3></td>
      <td align="right"><p class="item-time">${postInfo.date}</p></td>
    </tr>
    <tr class="post-content">
      <td colspan='2'>${postInfo.content}</td>
      <td></td>
    </tr>
    <tr colspan='2'>
      <td colspan='2' class='post-like'><div class="item-like">추천&nbsp;&nbsp;<i class="far fa-thumbs-up" onclick="like(${postInfo.uid})"></i><p>${postInfo.likesCount}</p></div></td>
      <td></td>
    </tr>
    <tr colspan='2' class="last-row"></tr>
  `;
    postItem.setAttribute('class', 'post-table');
    healingContainer.appendChild(postItem);
  } else {
    window.location.href = '../mypage/mypage.html';
  }
}

window.addEventListener('load', () => {
  setLayout(wrote);
});
