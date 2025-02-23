$(document).ready(function () {
  $("#header").load("../../util/header.html");
});

import { FreteService } from "../../service/freteService.js";

document.addEventListener("DOMContentLoaded", () => {
  const consultarFreteBtn = document.getElementById("consultarFreteBtn");
  const cepInput = document.getElementById("cepInput");
  const freteResultado = document.getElementById("freteResultado");

  const freteService = new FreteService();

  consultarFreteBtn.addEventListener("click", async () => {
    const cep = cepInput.value.replace("-", "").trim();

    if (!/^\d+$/.test(cep)) {
      freteResultado.innerHTML =
        '<p class="text-red-500">Por favor, digite apenas números para o CEP.</p>';
      return;
    }

    if (cep.length !== 8) {
      freteResultado.innerHTML =
        '<p class="text-red-500">Por favor, digite um CEP válido com 8 dígitos.</p>';
      return;
    }

    try {
      const data = await freteService.buscarCep(cep);
      freteResultado.innerHTML = `
        <p><strong>A entrega para:</strong> ${data.state}, ${data.city}, ${data.neighborhood}, ${data.street}<strong> é de R$19,99</strong></p>
      `;
    } catch (error) {
      freteResultado.innerHTML = `<p class="text-red-500">Erro: ${error.message}</p>`;
    }
  });
});
