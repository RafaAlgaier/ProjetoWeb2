export class FreteService {
  static token = "17902|n01nLt69zlzyt9fZ9usTuSFWclRO2v2g"; // Token estático

  constructor() {}

  async consultarCep(cep) {
    const url = `https://api.invertexto.com/v1/cep/${cep}?token=${FreteService.token}`;

    try {
      console.log("Consultando API:", url); // Verifica se está chamando a API corretamente
      const response = await fetch(url);
      console.log("Status da resposta:", response.status); // Verifica o status HTTP

      if (!response.ok) {
        throw new Error(`Erro na requisição: ${response.status}`);
      }

      const data = await response.json();
      console.log("Dados retornados:", data); // Exibe os dados retornados pela API
      return data;
    } catch (error) {
      console.error("Erro ao consultar o CEP:", error);
      throw error;
    }
  }
}
