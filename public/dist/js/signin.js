const firebaseConfig = {
  apiKey: "AIzaSyC3IBWiBpkJrbTUDjZghmI6lhsAwZTyCzQ",
  authDomain: "youwill-ab07b.firebaseapp.com",
  databaseURL: "https://youwill-ab07b-default-rtdb.firebaseio.com",
  projectId: "youwill-ab07b",
  storageBucket: "youwill-ab07b.appspot.com",
  messagingSenderId: "911679109781",
  appId: "1:911679109781:web:0d175c565313132dc1b99c",
  measurementId: "G-NLLD2DRTLL"
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();

document.addEventListener('DOMContentLoaded', function () {
  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      if (window.location.pathname == '/pages/signin/') {
        window.location.href = '/';
      }
      document.getElementById('signin').id = 'signout';
      document.getElementById('signout').textContent = '로그아웃';
      document.getElementById('signout').onclick = signout;
      document.getElementById('signup').id = 'mypage';
      document.getElementById('mypage').textContent = '마이페이지';
      // 마이페이지로 이동하도록 href 변경하기
    } else {
      console.log('not signin');
    }
  });
});

function googleLogin() {
  let provider = new firebase.auth.GoogleAuthProvider();
  provider.addScope('https://www.googleapis.com/auth/plus.login');
  provider.setCustomParameters({
    prompt: 'select_account',
  });
  firebase
    .auth()
    .signInWithRedirect(provider)
    .then(function (result) {
      firebase
        .auth()
        .setPersistence(firebase.auth.Auth.Persistence.LOCAL)
        .then(() => {
          const token = result.credential.accessToken;
          const user = result.user;
        })
        .catch(function (error) {
          const errorCode = error.code;
          const email = error.email;
        });
    });
}

function signout() {
  firebase
    .auth()
    .signOut()
    .then(
      function () {},
      function (error) {}
    );
  document.getElementById('signout').onclick = () => {
    location.href = '../../pages/signin/';
  };
  document.getElementById('signout').id = 'signin';
  document.getElementById('signin').textContent = '로그인';
  document.getElementById('mypage').id = 'signup';
  document.getElementById('signup').textContent = '회원가입';
  // 마이페이지로 이동하도록 href 설정(onclick)하기;
}
