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

const postTable = document.getElementsByClassName('post-table');
const postInfo = [
  // 임시 배열
  {
    title: '오늘 학교 후문에서 짐 쏟았을 때 도와주신 분들께 정말 감사했습니다!',
    content:
      '짐이 엄청 많았는데 급하게 지나가시던 두 분께서 호다닥 주워주셔서 덕분에 짐 챙겼어요ㅠㅠ',
    time: '05.01 17:56',
    likes: 0,
  },
];

function setLayout(postInfo) {
  // const postTitleDate = `<tr class="post-title-date">
  //                         <td><h3>${postInfo[0].title}</h3></td>
  //                         <td align="right"><p class="item-time">${postInfo[0].time}</p></td>
  //                       </tr>`;
  // const postContent = `<tr class="post-content">
  //                         <td colspan='2'>${postInfo[0].content}</td>
  //                         <td></td>
  //                     </tr>`;
  // const postLikes = `<tr colspan='2'>
  //                       <td colspan='2' class='post-like'><div class="item-like">추천&nbsp;&nbsp;<i class="fas fa-thumbs-up icon-thumbs"></i><p>${postInfo[0].likes}</p></div></td>
  //                       <td></td>
  //                   </tr>
  //                   <tr colspan='2' class="last-row"></tr>`;
  // postTable.innerHTML = postTitleDate + postContent + postLikes;
  // postTable.setAttribute('class', 'post-table');
}

window.addEventListener('load', () => {
  setLayout(postInfo);
});
