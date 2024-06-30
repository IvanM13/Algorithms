function BinaryTree() {
    this._root = null;
}

BinaryTree.prototype.traverseInOrder = function() {
    traverseInOrderHelper(this._root);

    function traverseInOrderHelper(node) {
        if (!node)
            return;
        traverseInOrderHelper(node.left);
        console.log(node.value);
        traverseInOrderHelper(node.right);
    }
}

BinaryTree.prototype.traverseInOrderIterative = function() {
    var current = this._root,
        s = [],
        done = false;

    while (!done) {
        // Reach the left most Node of the current Node
        if (current != null) {
            // Place pointer to a tree node on the stack
            // before traversing the node's left subtree
            s.push(current);
            current = current.left;
        } else {
            if (s.length) {
                current = s.pop();
                console.log(current.value);
                current = current.right;
            } else {
                done = true;
            }
        }
    }
}
BinaryTree.prototype.traversePostOrder = function() {
    traversePostOrderHelper(this._root);

    function traversePostOrderHelper(node) {
        if (node.left)
            traversePostOrderHelper(node.left);
        if (node.right)
            traversePostOrderHelper(node.right);
        console.log(node.value);
    }
}

BinaryTree.prototype.traversePostOrderIterative = function() {
    // Create two stacks
    var s1 = [],
        s2 = [];

    // Push root to first stack
    s1.push(this._root);

    //# Run while first stack is not empty
    while (s1.length) {
        // Pop an item from s1 and append it to s2
        var node = s1.pop();
        s2.push(node);

        // Push left and right children of removed item to s1
        if (node.left)
            s1.push(node.left);
        if (node.right)
            s1.push(node.right);
    }
    // Print all eleements of second stack
    while (s2.length) {
        var node = s2.pop();
        console.log(node.value);
    }
}
BinaryTree.prototype.traverseLevelOrder = function() {
    // Breath first search
    var root = this._root,
        queue = [];

    if (!root)
        return;
    queue.push(root);

    while (queue.length) {
        var temp = queue.shift();
        console.log(temp.value);
        if (temp.left)
            queue.push(temp.left);
        if (temp.right)
            queue.push(temp.right);
    }
}

function BinarySearchTree() {
    this._root = null;
}
BinarySearchTree.prototype.insert = function(value) {
    var thisNode = {
        left: null,
        right: null,
        value: value
    };
    if (!this._root) {
        //if there is no root value yet
        this._root = thisNode;
    } else {
        //loop traverse until
        var currentRoot = this._root;
        while (true) {
            if (currentRoot.value > value) {
                //let's increment if it's not a null and insert if it is a null
                if (currentRoot.left != null) {
                    currentRoot = currentRoot.left;
                } else {
                    currentRoot.left = thisNode;
                    break;
                }
            } else if (currentRoot.value < value) {
                //if bigger than current, put it on the right
                //let's increment if it's not a null and insert if it is a null
                if (currentRoot.right != null) {
                    currentRoot = currentRoot.right;
                } else {
                    currentRoot.right = thisNode;
                    break;
                }
            } else {
                //case that both are the same
                break;
            }
        }
    }
}
BinarySearchTree.prototype.remove = function(value) {

    return deleteRecursively(this._root, value);

    function deleteRecursively(root, value) {
        if (!root) {
            return null;
        } else if (value < root.value) {
            root.left = deleteRecursively(root.left, value);
        } else if (value > root.value) {
            root.right = deleteRecursively(root.right, value);
        } else {
            //no child
            if (!root.left && !root.right) {
                return null; // case 1
            } else if (!root.left) { // case 2
                root = root.right;
                return root;
            } else if (!root.right) { // case 2
                root = root.left;
                return root;
            } else {
                var temp = findMin(root.right); // case 3
                root.value = temp.value;
                root.right = deleteRecursively(root.right, temp.value);
                return root;
            }
        }
        return root;
    }

    function findMin(root) {
        while (root.left) {
            root = root.left;
        }
        return root;
    }
}
BinarySearchTree.prototype.findNode = function(value) {
    var currentRoot = this._root,
        found = false;
    while (currentRoot) {
        if (currentRoot.value > value) {
            currentRoot = currentRoot.left;
        } else if (currentRoot.value < value) {
            currentRoot = currentRoot.right;
        } else {
            //we've found the node
            found = true;
            break;
        }
    }
    return found;
}
var bst1 = new BinarySearchTree();
bst1.insert(11);
bst1.insert(3);
bst1.insert(5);
bst1.insert(2);
bst1.insert(9);
bst1.insert(89);

console.log(bst1.findNode(3)); // true
console.log(bst1.findNode(89));
console.log(bst1.findNode(5));
console.log(bst1.findNode(54));
console.log(bst1);