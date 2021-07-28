const healingRecent = document.getElementById('healing-list');
const dbRef = firebase.database().ref('Healing').orderByChild('date');

function setLayout(healingPreview, dbRef) {
  dbRef.on('value', (snapshot) => {
    snapshot.forEach((topSnap) => {
      const post = topSnap.val();
      const healingItem = document.createElement('div');
      healingItem.innerHTML = `<h4 class="item-title">${post.title}</h4>
          <p class="item-content">${post.content}</p>
          <div class="item-detail">
            <p class="item-time">${post.date}</p>
            <div class="item-like">
              <i class="fas fa-thumbs-up icon-thumbs"></i>
              <p>${post.likesCount}</p>
            </div>
          </div>`;
      healingItem.setAttribute('class', 'healing-item');
      healingItem.setAttribute(
        'onclick',
        "location.href='healing_detail.html'"
      );
      healingPreview.insertBefore(healingItem, healingPreview.firstChild);
    });
  });
}

window.addEventListener('load', () => {
  setLayout(healingRecent, dbRef);
});
