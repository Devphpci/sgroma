window.onload = () => {
  const params = new URLSearchParams(window.location.search);
  const expired = params.get("session_expired");
  const box = document.getElementById("logout-message");

  if (expired) {
    box.innerText = "Votre session est expirée. Veuillez vous reconnecter.";
  } else {
    box.innerText = "Vous avez été déconnecté avec succès.";
  }

  sessionStorage.clear(); // Nettoyage de la session

  // Redirection automatique après 5 secondes
  window.location.href = "index.html";

};