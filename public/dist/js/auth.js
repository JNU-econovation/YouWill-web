const signinBtn = document.getElementById('signin');
const signupBtn = document.getElementById('signup');

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
    const target = window.location.pathname === '/' ? 'pages' : '..';
    if (user) {
      if (
        window.location.pathname === '/pages/signin/' ||
        window.location.pathname === '/pages/signup/'
      ) {
        window.location.href = '/';
      }
      signinBtn.textContent = '로그아웃';
      signinBtn.onclick = signout;
      signupBtn.textContent = '마이페이지';
      signupBtn.setAttribute(
        'onclick',
        "location.href='" + target + "/mypage/mypage.html'"
      );
    } else {
      console.log('not signin');
      signinBtn.textContent = '로그인';
      signinBtn.setAttribute(
        'onclick',
        "location.href='" + target + "/signin/'"
      );
      signupBtn.textContent = '회원가입';
      signupBtn.setAttribute(
        'onclick',
        "location.href='" + target + "/signup/'"
      );
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

function signin() {
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in
      var user = userCredential.user;
      // ...
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      // ..
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
}
