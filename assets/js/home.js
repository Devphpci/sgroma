window.onload = () => {
  if (!sessionStorage.getItem("user_id")) {
    window.location.href = "index.html";
    return;
  }

  if (isLoginSessionExpired()) {
    window.location.href = "logout.html?session_expired=1";
    return;
  }

  const name = sessionStorage.getItem("user_name");
  document.getElementById("welcome-message").innerText = `Bonjour ${name}, votre session est active.`;
};

function isLoginSessionExpired() {
  const loginTime = sessionStorage.getItem("loggedin_time");
  const now = Date.now();
  const maxDuration = 30 * 60 * 1000; // 30 minutes
  return !loginTime || (now - loginTime > maxDuration);
}