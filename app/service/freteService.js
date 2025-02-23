export class FreteService {
  constructor() {
    this.token = "17974|Xe009wQku3AbcHSNlkZ3f85ZcPUf4vgE";
    this.baseUrl = "https://api.invertexto.com/v1/cep/";
  }

  async buscarCep(cep) {
    try {
      const response = await fetch(`${this.baseUrl}${cep}?token=${this.token}`);
      if (!response.ok) {
        throw new Error("Erro ao buscar o CEP.");
      }
      return await response.json();
    } catch (error) {
      throw new Error(error.message);
    }
  }
}
