/* DARK MODE SWITCH*/
document.getElementById('dark-mode-toggle').addEventListener('change', e => {
    document.body.classList.toggle('dark-mode');
});

/* SCROLL BACK UP SWITCH */
window.addEventListener('scroll', function() {
    var backToTopButton = document.getElementById('back-to-top');
    if (window.pageYOffset > 300) {
        backToTopButton.classList.add('show');
    } else {
        backToTopButton.classList.remove('show');
    }
});

document.getElementById('back-to-top').addEventListener('click', function(e) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
});


/* CHECK PASSWORD MATCH*/
function checkPasswordMatch() {
  var password = document.getElementById("password").value;
  var confirmPassword = document.getElementById("confirm-password").value;

  if (password !== confirmPassword) {
    document.getElementById("confirm-password-no-match").style.display =
      "inline";
    return false;
  } else {
    document.getElementById("confirm-password-no-match").style.display = "none";
    return true;
  }
}

document
  .getElementById("submit-btn")
  .addEventListener("click", function (event) {
    if (!checkPasswordMatch()) {
      event.preventDefault();
    } else {
      window.location.href = "#about";
    }
  });
