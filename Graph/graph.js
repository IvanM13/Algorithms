// const graph1 = {
//     A: [],
//     B: [], 
//     C: [],
//     D: [],
//     E: []
// };

// const { A, B, C, D, E } = graph1;

// A.push(B, C, E);
// B.push(A, D);
// C.push(A, D);
// D.push(B, C);
// E.push(A);

// class Vertex {
//     constructor(graph, data){
//         this.graph = graph;
//         this.data = data;
//         this.links = new Map();
//     }
//     link(...args){
//         const distinct = new Set(args);
//         const links = this.links;
//         const keyField = this.graph.keyField;
//         for (const item of distinct){
//             const key = item.data[keyField];
//             links.set(key, null);
//         } 
//         return this;
//     }
// }

// class Graph {
//     constructor(keyField){
//         this.keyField = keyField;
//         this.verticies = new Map();
//     }
//     add(data){
//         const vertex = new Vertex(this, data);
//         const key = data[this.keyField];
//         if (this.verticies.get(key) === undefined) {
//             this.verticies.set(key, vertex);
//         }
//         return vertex;
//     }
//     select(query){
//         const verticies = new Set();
//         for(let vertex of this.verticies.values()){
//             let condition = true;
//             const data = vertex.data;
//             if (data) {
//                 for(let field in query){
//                     condition = condition && data[field] === query[field];
//                 }
//                 if (condition) verticies.add(vertex);
//             }
            
//         }        
//     }
// }

'use struct';

function createNode(key) {
    const children = [];

    return {
        key,
        children,
        addChild(node) {
            children.push(node);
        }
    }
}

function createGraph(directed = false) {
    const nodes = [];
    const edges = [];

    return {
        directed,
        nodes,
        edges,
        addNode(key) {
            nodes.push(createNode(key));
        },

        getNode(key) {
            return nodes.find(n => n.key === key);
        },

        addEdge(node1Key, node2Key) {
            const node1 = this.getNode(node1Key);
            const node2 = this.getNode(node2Key);

            node1.addChild(node2);

            if(!directed){
                node2.addChild(node1);
            }

            edges.push(`${node1Key}${node2Key}`);
        },

        print() {
            return nodes
            .map( ({children, key}) => {
                let result = `${key}`;

                if(children.length) {
                    result += ` => ${
                        children
                        .map(node => node.key)
                        .join(' ')}`
                }

                return result;
            }).join('\n');
        }
    }
}

const graph = createGraph(true)

graph.addNode('Kyle')
graph.addNode('Anna')
graph.addNode('Krios')
graph.addNode('Tali')


graph.addEdge('Kyle', 'Anna')
graph.addEdge('Anna', 'Kyle')
graph.addEdge('Kyle', 'Krios')
graph.addEdge('Kyle', 'Tali')
graph.addEdge('Anna', 'Krios')
graph.addEdge('Anna', 'Tali')
graph.addEdge('Krios', 'Anna')
graph.addEdge('Tali', 'Kyle')

console.log(graph.print())

