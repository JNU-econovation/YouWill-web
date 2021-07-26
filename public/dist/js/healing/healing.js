const healingTop = document.getElementById('healing-top');
const previewCount = 6;
const dbRef = firebase.database().ref('Healing/');
dbRef.on('value', (snapshot) => {
  const data = snapshot.val();
  const uids = Object.getOwnPropertyNames(snapshot.val());
  //   for (i = 0; i < 6; i++) {
  //     console.log(data[uids[i]]);
  //     console.log(' ');
  //   }
  for (let i = 0; i < Math.min(previewCount, uids.length); i++) {
    const healingItem = document.createElement('div');
    const itemTitle = `<h4 class="item-title">${data[uids[i]].title}</h4>`;
    const itemContent = `<p class="item-content">${data[uids[i]].content}</p>`;
    const itemDetail = `<div class="item-detail">
                            <p class="item-time">${data[uids[i]].date}</p>
                            <div class="item-like">
                                <i class="fas fa-thumbs-up icon-thumbs"></i>
                                <p>${data[uids[i]].likesCount}</p>
                            </div>
                        </div>`;
    healingItem.innerHTML = itemTitle + itemContent + itemDetail;
    healingItem.setAttribute('class', 'healing-item');
    healingItem.setAttribute('onClick', "location.href='healing_detail.html'");
    healingTop.appendChild(healingItem);
  }
});
