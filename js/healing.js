(() => {
  const healingTop = document.getElementById('healing-top');
  const healingRecent = document.getElementById('healing-recent');
  const previewCount = 6;
  const topPostInfo = [
    // 임시 배열, 인기 글(추천 많은 순으로)
    {
      title:
        '오늘 학교 후문에서 짐 쏟았을 때 도와주신 분들께 정말 감사했습니다!',
      content:
        '짐이 엄청 많았는데 급하게 지나가시던 두 분께서 호다닥 주워주셔서 덕분에 짐 챙겼어요ㅠㅠ',
      time: '05.01 17:56',
      likes: 0,
    },
  ];
  const recentPostInfo = [
    // 임시 배열, 최근 글(최근에 게시된 순으로)
    {
      title:
        '오늘 학교 후문에서 짐 쏟았을 때 도와주신 분들께 정말 감사했습니다!',
      content:
        '짐이 엄청 많았는데 급하게 지나가시던 두 분께서 호다닥 주워주셔서 덕분에 짐 챙겼어요ㅠㅠ',
      time: '05.01 17:56',
      likes: 0,
    },
  ];

  function setLayout(healingPreview, postInfo) {
    for (let i = 0; i < previewCount; i++) {
      const healingItem = document.createElement('div');
      const itemTitle = `<h4 class="item-title">${postInfo[0].title}</h4>`;
      const itemContent = `<p class="item-content">${postInfo[0].content}</p>`;
      const itemDetail = `<div class="item-detail">
                            <p class="item-time">${postInfo[0].time}</p>
                            <div class="item-like">
                                <i class="fas fa-thumbs-up icon-thumbs"></i>
                                <p>${postInfo[0].likes}</p>
                            </div>
                        </div>`;
      healingItem.innerHTML = itemTitle + itemContent + itemDetail;
      healingItem.setAttribute('class', 'healing-item');
      healingPreview.appendChild(healingItem);
    }
  }
  window.addEventListener('load', () => {
    setLayout(healingTop, topPostInfo);
    setLayout(healingRecent, recentPostInfo);
  });
})();
