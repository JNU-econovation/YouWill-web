const healingTop = document.getElementById('healing-top');
const dbRef = firebase.database().ref('Healing/');

function setLayout(healingPreview, dbRef) {
  dbRef.on('value', (snapshot) => {
    const data = snapshot.val();
    const uids = Object.getOwnPropertyNames(snapshot.val());
    for (let i = 0; i < uids.length; i++) {
      const healingItem = document.createElement('div');
      const itemTitle = `<h4 class="item-title">${data[uids[i]].title}</h4>`;
      const itemContent = `<p class="item-content">${
        data[uids[i]].content
      }</p>`;
      const itemDetail = `<div class="item-detail">
                            <p class="item-time">${data[uids[i]].date}</p>
                            <div class="item-like">
                                <i class="fas fa-thumbs-up icon-thumbs"></i>
                                <p>${data[uids[i]].likesCount}</p>
                            </div>
                        </div>`;
      healingItem.innerHTML = itemTitle + itemContent + itemDetail;
      healingItem.setAttribute('class', 'healing-item');
      healingItem.setAttribute(
        'onClick',
        "location.href='healing_detail.html'"
      );
      healingPreview.appendChild(healingItem);
    }
  });
}

window.addEventListener('load', () => {
  setLayout(healingTop, dbRef);
});
