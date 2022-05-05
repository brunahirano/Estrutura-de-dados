/*
1. Implemente a Busca em Profundidade (DFS)
2. Implemente a Busca em Largura (BFS)
*/

class Graph {
    constructor() {
        this.adjacencies = new Map();
    }

    addNode(value) {
        this.adjacencies.set(value, []);
    }

    addVertex(a, b) {
        this.adjacencies.get(a).push(b);
        this.adjacencies.get(b).push(a);
    }

    dfs() {
        // TODO:
    }

    bfs(first) {

        const visited = new Map();
        const visitList = new Queue();

        visitList.add(first);

        while (!visitList.isEmpty()) {
            const node = visitList.remove();
            if (node && !visited.has(node)) {
                visited.set(node);
                node.getAdjacents().forEach(adj => visitList.add(adj));
                return node;
            }
        }
    }

    toString() {
        let result = "";
        for (let node of this.adjacencies.keys()) {
            result += `${node} -> ${this.adjacencies.get(node)}\n`;
        }
        return result;
    }
}

let g = new Graph();

g.addNode("a");
g.addNode("b");

g.addVertex("a", "b");

console.log(g.toString());