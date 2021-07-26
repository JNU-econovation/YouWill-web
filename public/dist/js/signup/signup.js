const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const passwordCheckInput = document.getElementById('password-check');
const checkBtn = document.getElementById('check-btn');
const submitBtn = document.getElementById('signup-btn');
const nameMsg = document.getElementById('name-error');
const emailMsg = document.getElementById('email-error');
const passwordMsg = document.getElementById('password-error');
const passwordCheckMsg = document.getElementById('password-check-error');

const checkName = (name) => {
  if (!name) {
    nameMsg.textContent = '이름을 입력해 주세요.';
    return false;
  } else {
    nameMsg.textContent = '';
    return true;
  }
};

const checkEmail = (email) => {
  const regExp =
    /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;

  if (!email) {
    emailMsg.textContent = '이메일 주소를 입력해 주세요.';
    return false;
  } else if (!regExp.test(email)) {
    emailMsg.textContent = '올바르지 않은 이메일 형식입니다.';
  } else {
    emailMsg.textContent = '';
    return true;
  }
};

const checkPassword = (password) => {
  const num = password.search(/[0-9]/g);
  const eng = password.search(/[a-z]/gi);
  const spe = password.search(/[`~!@@#$%^&*|₩₩₩'₩";:₩/?]/gi);

  if (!password) {
    passwordMsg.textContent = '비밀번호를 입력해 주세요.';
    return false;
  } else if (password.length < 8 || password.length > 20) {
    passwordMsg.textContent = '8자 이상 20자 미만이여야 합니다.';
    return false;
  } else if (
    (num < 0 && eng < 0) ||
    (eng < 0 && spe < 0) ||
    (spe < 0 && num < 0)
  ) {
    passwordMsg.textContent =
      '영문, 숫자, 특수문자 중 2가지 이상을 조합하여 입력해 주세요.';
    return false;
  } else {
    passwordMsg.textContent = '';
    return true;
  }
};

const checkPasswordCheck = (passwordCheck) => {
  if (!passwordCheck) {
    passwordCheckMsg.textContent = '비밀번호를 한 번 더 입력해 주세요.';
    return false;
  } else if (passwordCheck !== password.value) {
    passwordCheckMsg.textContent = '비밀번호가 일치하지 않습니다.';
    return false;
  } else {
    passwordMsg.textContent = '';
    return true;
  }
};

submitBtn.addEventListener('click', () => {
  if (
    checkName(nameInput.value) &&
    checkEmail(emailInput.value) &&
    checkPassword(passwordInput.value) &&
    checkPasswordCheck(passwordCheckInput.value)
  ) {
    signup(emailInput.value, passwordInput.value);
  }
});
