const signinGNB = document.getElementById('signin');
const signupGNB = document.getElementById('signup');

const firebaseConfig = {};

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
      signinGNB.textContent = '로그아웃';
      signinGNB.onclick = signout;
      signupGNB.textContent = '마이페이지';
      signupGNB.setAttribute(
        'onclick',
        "location.href='" + target + "/mypage/mypage.html'"
      );
    } else {
      console.log('not signin');
      signinGNB.textContent = '로그인';
      signinGNB.setAttribute(
        'onclick',
        "location.href='" + target + "/signin/'"
      );
      signupGNB.textContent = '회원가입';
      signupGNB.setAttribute(
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

function signup(email, password) {
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      var user = userCredential.user;
      alert('회원가입이 완료되었습니다.');
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      if (errorCode === 'auth/email-already-in-use') {
        alert('이미 등록된 이메일입니다. 로그인 페이지로 이동합니다.');
        window.location.href = '../signin/';
      }
    });
}

function signin(email, password) {
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      var user = userCredential.user;
      console.log('로그인 성공');
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorCode);
      console.log(errorMessage);
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
