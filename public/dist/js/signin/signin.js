const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password-input');
const signInBtn = document.getElementById('signin-btn');
const emailMsg = document.getElementById('email-error');
const passwordMsg = document.getElementById('password-error');

const checkEmailInput = (email) => {
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

const checkPasswordInput = (password) => {
  if (!password) {
    passwordMsg.textContent = '비밀번호를 입력해 주세요.';
    return false;
  } else {
    passwordMsg.textContent = '';
    return true;
  }
};

signInBtn.addEventListener('click', () => {
  if (
    checkEmailInput(emailInput.value) &&
    checkPasswordInput(passwordInput.value)
  ) {
    signin(emailInput.value, passwordInput.value);
  }
});
