/**
 * Abrir o site https://pythontutor.com/javascript.html, 
 * coloque a implementação lá e descreva ou resuma o que vc entendeu
 */

/**
 Resumo: 
 Existe uma classe node (nó) inicilizada com value e next como null e temos uma lista vinculada inicializada como head= null, this.tail=null e o comprimento de 0
 
 Existem métodos na LinkedList:
 isEmpty() - para saber se está vazia 

pop() = para retirar nó da lista.
Se a lista tiver fazia, nó cabeça e nó cauda serão definidos como null e o tamanho= 0. 
 Se a lista tiver pelo menos um nó, então a lista será reorganizada, removendo o último nó na lista, assim o segundo nó antes do nó cauda agora será o nó cauda.

 push() = para adicionar um valor na lista e reorganizar a estrutura da lista, se a lista tiver vazia o valor a ser inserido vai ser a cabeça e a calda, se a lista tiver pelo menos um nó, primeiro vai ser definido o ponteiro do nó final, no caso será o novo nó e depois podemos definir o nó calda para o novo nó e incrementar no comprimento da lista

 get() - o método retorna conforme o index apontado
 se o index < 0 || index > this.length || this.isEmpty() resultado vai ser null
 se o index for === 0, será o nó cabeça
 se o index for o tamanho da lista -1, será o nó cauda

 */


class Node {
  constructor(value) {
    // ao criar um nó, passaremos o valor para o construtor e inicializaremos o ponteiro com
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  isEmpty() {
    return this.length === 0;
  }

  pop() {
    if (this.isEmpty()) {
      return null;
    } else if (this.length === 1) {
      //existe somente um nó na lista e vamos remove-lo
      const nodeToRemove = this.head;
      this.head = null;
      this.tail = null;
      this.length--;

      return nodeToRemove;
    } else {
      // existem vamos nós na lista

      // inicia o ponteiro na cabecã
      let currentNode = this.head;
      // removemos o ultimo nó da lista
      let nodeToRemove = this.tail;
      // essa passa a ser a nova cauda
      let secondToLastNode;

      while (currentNode) {
        if (currentNode.next === this.tail) {
          secondToLastNode = currentNode;
          break;
        }
        currentNode = currentNode.next;
      }

      secondToLastNode.next = null;
      this.tail = secondToLastNode;
      this.length--;

      return nodeToRemove;
    }
  }

  push(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      // a lista tem pelo menos um nó

      // Se a lista não estiver vazia, 
      //devemos primeiro definir o ponteiro do nó final 
      // atual para o novo nó.
      // Então podemos definir `this.tail`
      // para o novo nó e incrementar o comprimento da lista
      this.tail.next = node;
      this.tail = node;
    }

    this.length++;
  }

  get(index) {
    if (index < 0 || index > this.length || this.isEmpty()) {
      return null;
    }

    if (index === 0) {
      return this.head;
    }

    if (index === this.length - 1) {
      return this.tail;
    }

    let currentNode = this.head;
    let interator = 0;
    while (interator < index) {
      interator++;
      currentNode = currentNode.next;
    }

    return currentNode;
  }
}


const list = new LinkedList();

list.push(5);
list.push(8);
list.push(10);
list.push(50);
console.log(list);

list.pop();
console.log(list);
console.log(list.get(-1));