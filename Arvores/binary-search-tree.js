/*
1. Implemente o método `find`, que deve buscar por um nó na Árvore de Busca Binária
2. EXTRA: Implemente o método `delete`, que remove um nó da árvore. (Cuidado para preservar
as restrições da árvore de busca binária!).
*/

class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }

    toString() {
        return `${this.value}`;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        if (this.root === null) {
            this.root = new Node(value);
        } else {
            this._insertNode(this.root, value);
        }
    }

    _insertNode(node, value) {
        if (node.value < value) {
            if (node.right === null) {
                node.right = new Node(value);
            } else {
                this._insertNode(node.right, value);
            }
        } else {
            if (node.left === null) {
                node.left = new Node(value);
            } else {
                this._insertNode(node.left, value);
            }
        }
    }

    inOrderTraversal() {
        this._inOrder(this.root);
    }

    _inOrder(node) {
        if (node === null) {
            return;
        }

        this._inOrder(node.left);
        console.log(node.value);
        this._inOrder(node.right);
    }


    // returns root of the tree
    getRootNode() {
        return this.root;
    }

    find(value) {
        if (!this.root) 
        return false

        let root = this.root
        let found = false
        while (root && !found) {
            if (value < root.value) {
                root = root.left
            } else if (value > root.value) {
                root = root.right
            } else {
                found = root
            }

        }

        if (!found) return undefined;
        return found


    }

    // this function calls removeNode

    remove(value) {
        this.root = this.removeNode(this.root, value)
    }
    // a recursive function to insert a new value in binary search tree

    removeNode(root, value) {

        // base case, if the tree is empty 

        if (root === null) 
        return root

        // when value is the same as roots value, this is the node to be deleted

        if (value === root.value) {

            // for case 1 and 2, node without child or with one child

            if (root.left === null && root.right === null) {

                return null

            } else if (root.left === null) {

                return root.right

            } else if (root.right === null) {

                return root.left

            } else {

                /// node with two children, get the inorder successor, 
                //smallest in the right subtree

                let tempNode = this.kthSmallestNode(root.right)
                root.value = tempNode.value

                /// delete the inorder successor

                root.right = this.removeNode(root.right, tempNode.value)
                return root
            }

            // recur down the tree

        } else if (value < root.value) {

            root.left = this.removeNode(root.left, value)
            return root

        } else {

            root.right = this.removeNode(root.right, value)
            return root
        }
    }

    /// helper function to find the smallest node

    kthSmallestNode(node) {
        while (!node.left === null)
            node = node.left

        return node
    }

}

let tree = new BinarySearchTree();

tree.insert(23);
tree.insert(34);
tree.insert(25);
tree.insert(12);
tree.insert(10);
tree.insert(11);
tree.insert(16);
tree.insert(40);
tree.insert(31);

console.log("Tree")

tree.inOrderTraversal()

console.log("Find")

console.log(tree.find(34))

console.log("Delete")
tree.removeNode(tree.root, 16);


console.log("Tree")

tree.inOrderTraversal()