// const node = {
//     key: 0,
//     left: 0,
//     right: 0
// }

// function tree(n) {
//     let nodeNew, x, nl, nr;
//     if (n === 0) {
//         nodeNew = 0;
//     } else {
//         nodeNew.key = x;
//         nodeNew.left = tree(nl);
//         nodeNew.right = tree(nr);
//     }
//     return nodeNew;
// }

// class Node {
//     constructor(value, height) {
//         this.value = value;
//         this.height = height;
//         this.left = null;
//         this.right = null;
//     }
// }

// function getHeight(node) {
//     if (node === null) {
//         return 0;
//     } else {
//         return node.height;
//     }
// }

// function insert(node, height) {
//     if (getHeight(node.left) > height / 2) {
//         insert(node.left, height);
//     } else if (getHeight(node.right) > height - getHeight(node.left) - 1) {
//         insert(node.right, height);
//     }
//     return node;
// }

// const root = new Node(1, 1);
// const arr = [8, 9, 11, 15, 19, 20, 21, 7, 3, 2, 1, 5, 6, 4, 13, 14, 10, 12, 17, 16, 18];
// console.log(insert(root, 4));
// class Node {
//     constructor(value, left = null, right = null) {
//         this.value = value
//         this.left = left
//         this.right = right
//     }
// }

// class BinaryTree {
//     root = null

//     addNode(value) {
//         if (!this.root) {
//             this.root = new Node(value)
//         } else {
//             let currentNode = this.root
//             while (true) {
//                 if (value < currentNode.value) {
//                     if (currentNode.left) {
//                         currentNode = currentNode.left
//                     } else {
//                         currentNode.left = new Node(value)
//                         break
//                     }
//                 } else if (value > currentNode.value) {
//                     if (currentNode.right) {
//                         currentNode = currentNode.right
//                     } else {
//                         currentNode.right = new Node(value)
//                         break
//                     }
//                 } else {
//                     // Duplicate
//                     break
//                 }
//             }
//         }
//     }

//     inOrderTraversal() {
//         let result = []
//         function traverse(node) {
//             if (node) {
//                 traverse(node.left)
//                 result.push(node.value)
//                 traverse(node.right)
//             }
//         }
//         traverse(this.root)
//         return result
//     }

//     preOrderTraversal() {
//         let result = []
//         function traverse(node) {
//             if (node) {
//                 result.push(node.value)
//                 traverse(node.left)
//                 traverse(node.right)
//             }
//         }
//         traverse(this.root)
//         return result
//     }

//     postOrderTraversal() {
//         let result = []
//         function traverse(node) {
//             if (node) {
//                 traverse(node.left)
//                 traverse(node.right)
//                 result.push(node.value)
//             }
//         }
//         traverse(this.root)
//         return result
//     }

//     levelOrderTraversal(node = this.root) {
//         const stack = [node]
//         while (stack.length) {
//             const node = stack.pop()
//             result.push(node.value)

//             if (node.left || node.right) stack.push(...(node.left || []), ...(node.right || []))
//         }

//         return result
//     }

// }



class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

// Функция для построения идеально сбалансированного дерева
function buildBalancedTree(arr) {
    if (arr.length === 0) {
        return null;
    }

    const middleIndex = Math.floor(arr.length / 2);
    const root = new TreeNode(arr[middleIndex]);

    const leftSubtree = arr.slice(0, middleIndex);
    const rightSubtree = arr.slice(middleIndex + 1);

    root.left = buildBalancedTree(leftSubtree);
    root.right = buildBalancedTree(rightSubtree);

    return root;
}

const sortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const balancedTree = buildBalancedTree(sortedArray);
console.log(balancedTree);
/**
 * Given the root of a binary tree containing integers, print the columns of the tree in order with the nodes in each column printed top-to-bottom.
 * Input:
      6
     / \
    3   4
   / \   \
  5   1   0
 / \     /
9   2   8
     \
      7
Output:
9 5 3 2 6 1 7 4 8 0
Input:
       1
     /   \
    2     3
   / \   / \
  4   5 6   7

When two nodes share the same position (e.g. 5 and 6), they may be printed in either order:
Output:
4 2 1 5 6 3 7
or:
4 2 1 6 5 3 7
 */

// function Node(value) {
//     this.left = null;
//     this.right = null;
//     this.value = value;
//     return this;

// }

//  var columns = {};
// function printColumns(root, start) {

//    if( columns[start] !== undefined) {
//        columns[start].push(root.value)
//     } else {
//          columns[start] = [root.value];
//     }

//     if(root.left !== null) {
//         printColumns(root.left, start - 1)
//     }

//     if(root.right !== null) {
//         printColumns(root.right, start + 1)
//     }

// }



// var one = new Node(1);
// var two  = new Node(2);
// var three  = new Node(3);
// var four  = new Node(4);
// var five  = new Node(5);
// var six  = new Node(6);
// var seven  = new Node(7);

// one.left = two;
// one.right = three;
// two.left = four;
// two.right = five;
// three.left = six;
// three.right = seven;

// printColumns(one, 0)
// var res = '';
// var keys = Object.keys(columns).sort(function (a, b) {
//   return a - b
// });
// for(var i = 0; i < keys.length; i++) {
//     res += columns[keys[i]].toString().replace(',\g', ' ');
// }

// console.log(res)


