import { User } from "../../model/user.js";

// Função auto-executável para implementar o Module Pattern
(function () {
  document
    .getElementById("registration-form")
    .addEventListener("submit", function (event) {
      event.preventDefault(); // Previne o envio padrão do formulário

      // Valida o formulário
      if (!isFormValid()) {
        alert("Por favor, verifique os campos destacados.");
        return;
      }

      // Lê os dados do formulário e cria um novo usuário
      const user = readFormDataAndCreateUser();

      // Verifica se o e-mail já está cadastrado
      if (isEmailRegistered(user.email)) {
        alert("Este e-mail já está cadastrado. Por favor, use outro.");
        return;
      }

      // Salva o usuário no Local Storage
      saveUserToLocalStorage(user);

      alert("Usuário cadastrado com sucesso!");
      document.getElementById("registration-form").reset(); // Limpa o formulário
    });

  /**
   * Lê os dados do formulário e retorna um objeto de usuário.
   */
  function readFormDataAndCreateUser() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const senha = document.getElementById("password").value;

    return { name, email, senha };
  }

  /**
   * Verifica se o e-mail já está cadastrado no Local Storage.
   */
  function isEmailRegistered(email) {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    return users.some((user) => user.email === email);
  }

  /**
   * Salva o usuário no Local Storage.
   */
  function saveUserToLocalStorage(user) {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    users.push(user);
    localStorage.setItem("users", JSON.stringify(users));

    // Salva o último e-mail cadastrado no localStorage
    localStorage.setItem("lastRegisteredEmail", user.email);
  }

  /**
   * Verifica se o formulário é válido.
   */
  function isFormValid() {
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;

    if (password !== confirmPassword) {
      alert("As senhas não coincidem.");
      return false;
    }
    return true;
  }
})();
