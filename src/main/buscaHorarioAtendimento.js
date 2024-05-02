class BuscaHorarioAtendimento {
    constructor(servicoRemoto) {
      this.servicoRemoto = servicoRemoto;
    }
  
    async buscarHorarioProfessor(id) {
      try {
        const resposta = await this.servicoRemoto.buscar(id);
        const horarioProfessor = JSON.parse(resposta);
        return horarioProfessor;
      } catch (erro) {
        throw new Error("Erro ao buscar horário do professor: " + erro.message);
      }
    }
  }