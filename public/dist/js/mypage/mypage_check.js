const mypageName=document.getElementById('userName');
const willCont=document.getElementById('title1');
const healingRef = firebase.database().ref('Healing').orderByChild('likesCount');

const firebaseAuth=firebase.auth(); 
const firebaseDatabase=firebase.database();

let loginName; //유저 이름
let loginEmail; //유저 이메일
let loginUserKey; //로그인한 유저의 부모 key
let userInfo; //로그인한 유저의 정보 object type

let googleName;//구글 로그인 시 이름
let googleEmail;//구글 로그인 시 이메일 
let googleID;;//구글 로그인 시 사용자 ID

function getHealingList(healingRef){
  healingRef.on('value',(snapshot)=>{
    snapshot.forEach((postSnap) => {
      const post = postSnap.val();
      const healingItem = document.createElement('a');
      healingItem.innerHTML=
        `<span class="title">${post.title}</span>
         <span class="date">${post.date}</span> `
    });
  })
}
window.addEventListener('load',()=>{
  getHealingList(healingRef);
})
firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      userID=user.uid;

      console.log('로그인 성공');
      googleName=user.displayName;
      googleEmail=user.email;
      googleID=user.uid

      if(googleName==null){
        firebaseDatabase.ref("Users/" + user.uid).once('value').then(function (snapshot) {
          loginName = snapshot.val().name;
          loginEmail=snapshot.val().email;   
          loginUserKey = snapshot.key;  
          userInfo = snapshot.val(); 
  
          if(window.location.pathname==='/pages/mypage/mypage.html'){
            console.log('마이페이지 접속 성공');
            mypageName.textContent = loginName;
            console.log(loginName)
          }
          return true;
        });
      }
      else{
        if(window.location.pathname==='/pages/mypage/mypage.html'){
          console.log('마이페이지 접속 성공');
          mypageName.textContent = googleName;
         
        }
      }
    } 
    else{
      console.log('로그인 실패');
    }
   
});
