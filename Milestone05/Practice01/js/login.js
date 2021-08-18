const loginBtn = document.getElementById('login-submit');

loginBtn.addEventListener('click', function () {
    const userEmail = document.getElementById('user-email').value;
    const userPassword = document.getElementById('user-password').value;
    ;
    if (userEmail == "sr@gmail.com" && userPassword == "3333") {
        window.location.href = "banking1.html"
    }
    else {
        alert("Your entered Email and Password is not correct")
    }
});