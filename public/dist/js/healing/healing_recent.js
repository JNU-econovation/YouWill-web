const healingRecent = document.getElementById('healing-list');
const pencilBtn = document.getElementById('pencil-btn');
const dbRef = firebase.database().ref('Healing').orderByChild('date');

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

function textLengthOverCut(txt, maxLen) {
  if (txt.length > maxLen) {
    txt = txt.substr(0, maxLen) + '...';
  }
  return txt;
}

function convertDate(data) {
  return `${data.substr(0, 4)}/${data.substr(4, 2)}/${data.substr(6, 2)}`;
}

function setLayout(healingPreview, dbRef) {
  dbRef.on('value', (snapshot) => {
    snapshot.forEach((topSnap) => {
      const post = topSnap.val();
      const healingItem = document.createElement('div');
      if (post.content[0] === '<') {
        healingItem.innerHTML = `<h4 class="item-title">${textLengthOverCut(
          post.title,
          40
        )}</h4>
          <div class="item-content-html">${textLengthOverCut(
            post.content,
            100
          )}</div>
          <div class="item-detail">
            <p class="item-date">${convertDate(post.date)}</p>
            <div class="item-like">
              <i class="far fa-thumbs-up" id="icon-thumbs-blank"></i>
              <p>${post.likesCount}</p>
            </div>
          </div>`;
      } else {
        healingItem.innerHTML = `<h4 class="item-title">${textLengthOverCut(
          post.title,
          40
        )}</h4>
          <p class="item-content">${textLengthOverCut(post.content, 100)}</p>
          <div class="item-detail">
            <p class="item-date">${convertDate(post.date)}</p>
            <div class="item-like">
              <i class="far fa-thumbs-up" id="icon-thumbs-blank"></i>
              <p>${post.likesCount}</p>
            </div>
          </div>`;
      }
      healingItem.setAttribute('class', 'healing-item');
      healingItem.setAttribute(
        'onclick',
        `location.href='healing_detail.html?${post.id}'`
      );
      healingPreview.insertBefore(healingItem, healingPreview.firstChild);
    });
  });
}

window.addEventListener('load', () => {
  setLayout(healingRecent, dbRef);
});
