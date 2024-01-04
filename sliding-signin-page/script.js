const signUpBtn = document.getElementsByClassName('btn-signUp')[0];
const signInBtn = document.getElementsByClassName('btn-signIn')[0];
const container = document.getElementsByClassName('container')[0];
const signInContainer = document.getElementsByClassName('signin-container')[0];


signUpBtn.addEventListener('click', () => {
	container.classList.add("active");
  signInContainer.style.display = "none";
});

signInBtn.addEventListener('click', () => {
	container.classList.remove("active");
  signInContainer.style.display = "block" ;
});