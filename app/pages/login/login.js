document.addEventListener("DOMContentLoaded", function () {
  const emailField = document.getElementById("email");
  const passwordField = document.getElementById("password");
  const loginForm = document.querySelector("form");

  // Preencher o campo de e-mail caso haja um e-mail salvo
  const savedEmail = localStorage.getItem("lastRegisteredEmail");
  if (savedEmail) {
    emailField.value = savedEmail;
  }

  // Evento de submissão do formulário
  loginForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Previne o envio padrão do formulário

    const email = emailField.value;
    const password = passwordField.value;

    // Buscar usuários cadastrados no Local Storage
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find((user) => user.email === email);

    if (!user) {
      alert("E-mail não encontrado. Verifique e tente novamente.");
      return;
    }

    if (user.senha !== password) {
      alert("Senha incorreta. Verifique e tente novamente.");
      return;
    }

    alert("Login bem-sucedido!");
    window.location.href = "../telainicial/telainicial.html";
  });
});
