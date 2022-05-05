/**2. Implemente uma função que executa uma busca binária sobre um array de um tipo complexo também criado por você (por exemplo: classe Livro, classe Produto). A busca deve receber um determinado valor de atributo e utilizar esse valor para realizar a busca. Por exemplo: busca linear sobre um array de Livro e usando o título do livro para realizar a comparação. */


const listaLivros = [ "Dom Casmurro", "A culpa é das estrelas","O milagre da manhã"]



console.log("Lista não ordenada: ");
console.log(listaLivros);

const listaOrdenada = listaLivros.sort();

console.log("Lista ordenada: ");
console.log(listaOrdenada);

function binarySearch(listaLivros, start, end, id) {
   const listaOrdenada = listaLivros.sort();

   const mid = start + Math.floor((end - start) / 2);
   if (start <= end) {
      if (listaOrdenada[mid] == id) {
         return mid;
      }
      if (id < listaOrdenada[mid]) {
         return binarySearch(listaOrdenada, start, mid - 1, id);
      }
      if (id > listaLivros[mid]) {
         return binarySearch(listaLivros, mid + 1, end, id);
      }
   }
   return null;
}


console.log("Busca na Lista Ordenada:")
console.log(binarySearch(listaLivros, 0, listaLivros.length - 1, "Dom Casmurro"))


/*******************Tentei fazer com um array complexo e o resultado sempre null*******************/
class Livro2 {

   constructor(id, titulo, autor) {
      this.id = id;
      this.autor = autor;
      this.titulo = titulo;
   }
}

const listaLivros2 = [
   new Livro2(3, "Dom Casmurro", "Autor 3"),
   new Livro2(2, "O poder do hábito", "Autor 2"),
   new Livro2(1, "A culpa é das estrelas", "Autor 1")
]

console.log("Lista não ordenada 2: ")
console.log(listaLivros2)

const listaOrdenada2 = listaLivros2.sort((a, b) => a.id - b.id); //ordenando pelo id

console.log("Lista Ordenada 2:")
console.log(listaOrdenada2)

function binarySearch2(listaLivros, start, end, id) {
   const listaOrdenada2 = listaLivros.sort();

   const mid = start + Math.floor((end - start) / 2);
   if (start <= end) {
      if (listaOrdenada2[mid] == id) {
         return mid;
      }
      if (id < listaOrdenada2[mid]) {
         return binarySearch(listaOrdenada2, start, mid - 1, id);
      }
      if (id > listaOrdenada2[mid]) {
         return binarySearch(listaOrdenada2, mid + 1, end, id);
      }
   }
   return null;
}

console.log("Busca na Lista Ordenada 2:")
console.log(binarySearch2(listaLivros2, 0, listaLivros2.length - 1, listaOrdenada2.id === 3)) //Sempre retrorna null

/**********************Só consegui realizar a busca no array complexo com find *******************************/
const foundLivro = listaOrdenada2.find(listaOrdenada2 => listaOrdenada2.id === 3)
console.log("Busca na Lista Ordenada 2 com find:")
console.log(foundLivro)