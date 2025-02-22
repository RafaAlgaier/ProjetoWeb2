$(document).ready(function () {
  $("#header").load("../../util/header.html");
});

document.addEventListener("DOMContentLoaded", () => {
  const consultarFreteBtn = document.getElementById("consultarFreteBtn");
  const cepInput = document.getElementById("cepInput");
  const freteResultado = document.getElementById("freteResultado");

  const token = "17974|Xe009wQku3AbcHSNlkZ3f85ZcPUf4vgE";

  consultarFreteBtn.addEventListener("click", async () => {
    const cep = cepInput.value.replace("-", "").trim();

    // Verifica se o CEP contém apenas números
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
      const response = await fetch(
        `https://api.invertexto.com/v1/cep/${cep}?token=${token}`
      );
      if (!response.ok) {
        throw new Error("Erro ao buscar o CEP.");
      }

      const data = await response.json();
      freteResultado.innerHTML = `
        <p><strong>A entrega para:</strong> ${data.state}, ${data.city}, ${data.neighborhood}, ${data.street}<strong> é de R$19,99</strong></p>
      `;
    } catch (error) {
      freteResultado.innerHTML = `<p class="text-red-500">Erro: ${error.message}</p>`;
    }
  });
});
