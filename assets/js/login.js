// Logique pour gérer les messages d'erreur et les messages de session expirée.

/**
 * Affiche un message d'alerte dans un élément HTML.
 * @param {string} msg Le message à afficher.
 * @param {boolean} isError Indique si le message est une erreur (true) ou un message de succès (false).
 */
function showMessage(msg, isError = true) {
  // Sélectionne l'élément par son ID.
  const box = document.getElementById("message");
  if (!box) {
    console.error("L'élément avec l'ID 'message' n'existe pas dans la page.");
    return;
  }

  // Affiche le message.
  box.innerText = msg;
  box.style.display = "block";

  // Applique les styles en fonction du type de message.
  if (isError) {
    box.style.backgroundColor = "#ffe5e5";
    box.style.color = "#d8000c";
  } else {
    box.style.backgroundColor = "#d4edda";
    box.style.color = "#155724";
  }

  box.style.padding = "12px 20px";
  box.style.borderRadius = "8px";
  box.style.textAlign = "center";
  box.style.marginTop = "20px";

  // Cache le message après 5 secondes.
  setTimeout(() => {
    box.style.display = "none";
  }, 5000);
}

// Détection du paramètre session_expired dans l'URL.
window.onload = () => {
  const params = new URLSearchParams(window.location.search);
  const expired = params.get("session_expired");

  if (expired === "1") {
    // Utilise showMessage pour afficher le message approprié.
    showMessage("Votre session est expirée. Veuillez vous reconnecter.", false);
  }
};

// Gestion du formulaire de connexion.
document.getElementById("login-form").addEventListener("submit", function (e) {
  e.preventDefault(); // Empêche le rechargement de la page.
  const name = this.name.value;
  const password = this.password.value;
  
  // Appelle la fonction de connexion.
  loginUser(name, password);
});

/**
 * Gère la logique de connexion de l'utilisateur.
 * NOTE TRÈS IMPORTANTE : Cette fonction simule la logique côté client
 * pour la démonstration. Pour une vraie application, cette validation
 * DOIT SE FAIRE SUR UN SERVEUR (via une API).
 *
 * @param {string} name Le nom d'utilisateur.
 * @param {string} password Le mot de passe.
 */
function loginUser(name, password) {
  // Logique de validation simulée pour le moment.
  const validName = "7206438381";
  const validPassword = "3058230";

  if (name === validName && password === validPassword) {
    // En cas de succès, stocke des informations et redirige.
    // L'utilisation de sessionStorage n'est pas sécurisée pour les sessions.
    // Un vrai système de session utiliserait un cookie sécurisé géré par le serveur.
    sessionStorage.setItem("user_id", "1001");
    sessionStorage.setItem("user_name", name);
    sessionStorage.setItem("loggedin_time", Date.now());
    window.location.href = "app-index.html";
  } else {
    // En cas d'échec, affiche un message d'erreur.
    showMessage("Numéro client ou code secret incorrect !");
  }
}
