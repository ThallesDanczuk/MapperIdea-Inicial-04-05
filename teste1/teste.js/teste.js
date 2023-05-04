class Pessoa {

    constructor(nome, sobrenome, idade) {
      this._nome = nome;
      this._sobrenome = sobrenome;
      this._idade = idade;
    }
  
    setNome(nome) {
       this._nome = nome;
    }
  
    getNome() {
      return this._nome;
    }
  
    setSobrenome(sobrenome) {
       this._sobrenome = sobrenome;
    }
  
    getSobrenome() {
      return this._sobrenome;
    }
  
    setIdade(idade) {
       this._idade = idade;
    }
  
    getIdade() {
      return this._idade;
    }
  
  }

  class Dados {

    constructor(Cpf, RG) {
      this._Cpf = Cpf;
      this._RG = RG;
    }
  
    setCpf(Cpf) {
       this._Cpf = Cpf;
    }
  
    getCpf() {
      return this._Cpf;
    }
  
    setRG(RG) {
       this._RG = RG;
    }
  
    getRG() {
      return this._RG;
    }
  
  }
  
  
  