function login () {
  const usernameInput = document.getElementById("username");
  const passwordInput = document.getElementById("password");
  const result = document.getElementById("result");

  const isCorrectUsername = usernameInput.value === 'michelle@sigmaschool.co'
  const isCorrectPassword = passwordInput.value === 'password'

  if (isCorrectUsername && isCorrectPassword) {
    result.innerHTML = "Welcome Michelle!";
  } else if (isCorrectUsername) {
    result.innerHTML = "Wrong Password";
  } else {
    result.innerHTML = "Wrong password/username"
  }
}