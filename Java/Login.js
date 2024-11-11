function register() {
    var username = document.getElementById("register-username").value;
    var password = document.getElementById("register-password").value;

    if (username && password) {
        localStorage.setItem(username, password);
        alert("Registration successful!");
        document.getElementById("register-username").value = "";
        document.getElementById("register-password").value = "";
        document.getElementById("login-form").style.display = "block";
        document.getElementById("register-form").style.display = "none";
    } else {
        alert("Please fill in both fields.");
    }
}

function login() {
    var username = document.getElementById("login-username").value;
    var password = document.getElementById("login-password").value;

    var storedPassword = localStorage.getItem(username);

    if (storedPassword === password) {
        alert("Login successful!");
        document.getElementById("login-username").value = "";
        document.getElementById("login-password").value = "";
        document.getElementById("login-modal").style.display = "none";
    } else {
        alert("Incorrect username or password.");
    }
}