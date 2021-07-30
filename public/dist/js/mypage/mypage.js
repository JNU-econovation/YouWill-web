const tabList = document.querySelectorAll('.tab');
const mypageName = document.getElementById('user-name');
const will = document.getElementById('tab1');
let uid;

firebase.auth().onAuthStateChanged(function (user) {
  if (user) {
    uid = user.uid;
    if (user.displayName) {
      mypageName.textContent = user.displayName;
    } else {
      firebase
        .database()
        .ref('Users/' + user.uid)
        .once('value')
        .then((snapshot) => {
          mypageName.textContent = snapshot.val().name;
        });
    }
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

function setLayout(uid) {
  firebase
    .database()
    .ref('Will')
    .on('value', (snapshot) => {
      snapshot.forEach((willSnap) => {
        console.log(willSnap.val());
      });
    });
  // const willItem = document.createElement('a');
  // willItem.innerHTML = `
  //     <span class="title" id="title1">${textLengthOverCut(20)}</span>
  //     <span class="date">${convertDate()}</span>
  // `;
  // willItem.setAttribute('href', '#')
  // will.appendChild(willItem);
}

Array.prototype.forEach.call(tabList, function (list) {
  list.children[0].addEventListener('click', function (e) {
    e.preventDefault();
    const tabContent = document.querySelectorAll('.cont');
    const tabNum = this.parentElement.getAttribute('data-tabnum');

    Array.prototype.forEach.call(tabContent, function (cont, i) {
      cont.style.display = 'none';
      tabList[i].className = 'tab';
    });
    tabContent[tabNum].style.display = 'block';
    if (list.className.indexOf('active') == -1) {
      list.className = 'tab active';
    }
  });
});

window.addEventListener('load', () => {
  setLayout(uid);
});
