/**
 * Abstração - Exemplos
 * Exercicio 1 - Exemplos de abstração no dia a dia, se quiser implementar pode.
 */
class FazerCerveja {
  constructor(tipo_malte, tipo_lupulo,tipo_levedura, quantidade_malte, quantidade_lupulo, quantidade_agua, quantidade_acucar) {
    this.tipo_malte = tipo_malte;
    this.tipo_lupulo = tipo_lupulo;
    this.tipo_levedura = tipo_levedura;
    this.quantidade_malte = quantidade_malte;
    this.quantidade_lupulo = quantidade_lupulo
    this.quantidade_agua = quantidade_agua;
    this.quantidade_acucar = quantidade_acucar;
  }

  mosturacao() {
    return `Colocou ${this.quantidade_agua} + ${this.quantidade_malte} para ferver`;
  }

  filtração() {
    return 'Passou' + this.quantidade_agua + this.quantidade_malte + 'por uma bag que filtra';
  }

  fervuraDoMostro() {
    return `Ferveu o mostro e adicionou ${this.quantidade_lupulo}` 
  }

  resfriamento() {
    return `Refriamento do líquido à 23°C`;
  }

  fermentação() {
    return 'Armazenar por 6 dias na temperatura de 20 a 23°C!';
  }

  maturação(){
    return 'Armazenar por 10 dias na temperatura de 5 a 8°C '
  }

  envasar(){
    return `Colocar na cervja ${this.quantidade_acucar}, envasar e manter na temperatura de 20 a 23°C por 10 dias`
  }

  servirCerveja(){
    return "Cerveja pronta!!"
  }
}


let cerveja = new FazerCerveja("Pilsen", "Spalter Select", "Fermentis S-04", 5, 0.24, 20, 2).servirCerveja();
console.log(cerveja);