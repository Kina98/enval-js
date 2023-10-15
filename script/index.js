const submitBtn = document.getElementById('submit-btn');

const validate = (e) => {
  e.preventDefault();
  const password = document.getElementById('username');
  const emailAddress = document.getElementById('email-address');  
  if (emailAddress.value === "") {
    alert("Please enter your email address.");
    emailAddress.focus();
    return false;
  }

  if (password.value === "") {
    alert("Please enter your password.");
    password.focus();
    return false;
  }

  if (!emailIsValid(emailAddress.value)) {
    alert("Please enter a valid email address.");
    emailAddress.focus();
    return false;
  }

  // ouvrir le fichier dashboard.html
  window.open("dashboard.html", "_self");

  return true;
}

const emailIsValid = email => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

submitBtn.addEventListener('click', validate);