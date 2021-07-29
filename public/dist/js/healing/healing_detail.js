const healingContainer = document.getElementById('container');
const buttons = document.getElementById('button-row');
const pencilBtn = document.getElementById('pencil-btn');

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

function convertDate(data) {
  return `${data.substr(0, 4)}/${data.substr(4, 2)}/${data.substr(6, 2)}`;
}

function setLayout(postId) {
  const postItem = document.createElement('table');
  const dbRef = firebase.database().ref('Healing/' + postId);
  dbRef.on('value', (snapshot) => {
    const data = snapshot.val();
    postItem.innerHTML = `
      <tr class="post-title-date">
        <td><h3>${data.title}</h3></td>
        <td align="right"><p class="item-date">${convertDate(
          data.date
        )}</p></td>
      </tr>
      <tr class="post-content">
        <td colspan='2'>${data.content}</td>
        <td></td>
      </tr>
      <tr colspan='2'>
        <td colspan='2' class='post-like'><div class="item-like">추천&nbsp;&nbsp;<i class="far fa-thumbs-up" id="icon-thumbs-blank"></i><p>${
          data.likesCount
        }</p></div></td>
        <td></td>
      </tr>
      <tr colspan='2' class="last-row"></tr>
  `;
    postItem.setAttribute('class', 'post-table');
    healingContainer.insertBefore(postItem, buttons);
  });
}

window.addEventListener('load', () => {
  setLayout(window.location.search.substring(1));
});
