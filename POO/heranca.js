/**
 * Herança Simples - Exemplos
 * 
 * Exercicio 1 - Implemente 1 funcionalidade abstrata para a Pessoa e acesse nas pessoas fisicas e juridicas
 * Execicio 2 - Implemente 1 funcionalidade especifica nas classes de Pessoa Fisica e Pessoa Juridica, para elas.
 */

/**
 *  Construtor Pessoa
 *  Pessoa Juridica
 *  Pessoa Fisica
 */

 class Pessoa {
  constructor(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
  }
  
  mostrarNome() {
   console.log(this.nome);
  }

  mostrarSobrenome() {
    console.log(this.sobrenome);
  }

}

class Pfisica extends Pessoa {
  constructor(nome, sobrenome, cpf) {
    super(nome, sobrenome); //usada para acessar o objeto/classe pai
    this.cpf = cpf;
  }

  setCpf(cpf) {
    this.cpf = cpf;
  }

  mostrarCpf() {
    console.log(this.cpf)
  }
}

let pessoa = new Pfisica('Maria', 'Ribeiro', '11154545471');
console.log(pessoa)
pessoa.mostrarNome()
pessoa.mostrarSobrenome()
pessoa.mostrarCpf()
pessoa.setCpf("000000000")
console.log(pessoa.cpf)


class PJuridica extends Pessoa {
  constructor(nome, sobrenome, cnpj) {
    super(nome, sobrenome);
    this.cnpj = cnpj;
  }
}

let empresa = new PJuridica('Magalu', 'LTDA', '121321321/0001-10');
console.log(empresa);

class PJuridica2 extends Pessoa {
  constructor(nome, sobrenome) {
    super(nome, sobrenome);
  }

  setCnpj(cnpj) {
    this.cnpj = cnpj;
  }

  mostrarCnpj(){
    console.log(this.cnpj)
  }

  getCnpj() {
    return this.cnpj;
  }
}

empresa = new PJuridica2('Magalu', 'LTDA');
empresa.setCnpj('121213212/0001-20');
console.log(empresa);
empresa.mostrarNome()
empresa.mostrarCnpj()