const container = document.getElementById('container');
const button = document.getElementById('button');
let wrote = JSON.parse(localStorage.getItem('wrote'));

history.pushState(null, null, location.href);
window.onpopstate = function (event) {
  history.go(1);
};

function convertDate(data) {
  return `${data.substr(0, 4)}/${data.substr(4, 2)}/${data.substr(6, 2)}`;
}

function setLayout(postInfo) {
  if (postInfo) {
    const postItem = document.createElement('table');
    postItem.innerHTML = `
    <tr class="post-title-date">
      <td><h3></h3></td>
      <td align="right"><p class="item-time">${convertDate(
        postInfo.write_date
      )}</p></td>
    </tr>
    <tr class="post-content">
      <td id="content" height="1200px" background="../../dist/img/letter_paper_${
        postInfo.paper_type
      }.png" colspan='2'>${postInfo.content}</td>
      <td></td>
    </tr>
    <tr colspan='2'>
      <td></td>
      <td align='right'>
        <div id="edit-delete-btn">
          <button type="button" id="edit-btn">수정</button>
          <button type="button" id="delete-btn">삭제</button>
        </div>
      </td>
    </tr>
  `;
    postItem.setAttribute('class', 'post-table');
    container.insertBefore(postItem, button);
  } else {
    window.location.href = '../mypage/';
  }
}

window.addEventListener('load', () => {
  setLayout(wrote);
});
