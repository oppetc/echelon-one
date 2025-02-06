

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

document.addEventListener("DOMContentLoaded", function() {
    let loadingScreen = document.getElementById("loading-screen");
    let mainContent = document.getElementById("main-content");

    if (loadingScreen && mainContent) {
        setTimeout(() => {
            loadingScreen.classList.add("hidden");
            mainContent.classList.remove("hidden");
        }, 3000);
    } else {
        console.error("Error: Could not find loading-screen or main-content elements.");
    }
});
