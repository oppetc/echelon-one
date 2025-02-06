
document.getElementById("login-box").style.display = "block";

function validateLogin() {
    let password = document.getElementById("password").value;
    if (password === "elite2024") {
        document.getElementById("login-box").style.display = "none";
        document.getElementById("dashboard").classList.remove("hidden");
    } else {
        alert("ACCESS DENIED - SECURITY ALERT SENT.");
    }
}
