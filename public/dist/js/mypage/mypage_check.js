
const mypageName=document.getElementById('userName');
const willCont=document.getElementById('title1');
const auth=firebase.auth();
const willRef=firebase.database().ref('Will/');
let userInfo;


firebase.auth().onAuthStateChanged(function (user) {
    
    if (user) {
      
      userInfo=user;
      console.log('로그인 성공');
      if(window.location.pathname==='/pages/mypage/mypage.html'){
        console.log('마이페이지 접속 성공');
        mypageName.textContent = user.displayName;
        
      }
    } 
    else {
      
      console.log('not signin');

    }
});


willRef.on('child_added', function(data){
  const Key=data.key;
  const obj=data.val();

  var content=obj.content;
  var date=obj.date;
    
  console.log(obj);
  console.log(date);

  willCont.textContent=content;

})