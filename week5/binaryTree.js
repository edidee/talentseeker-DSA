/*
Preorder traversal 

Node - Left - Right

Inorder Traversal

Left - Node - Right

*/

class BinarySearch {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const arr1 = [];
const arr2 = []
function preOrderSearch(node) {
  if (node !== null) {
    arr1.push(node.value);
    preOrderSearch(node.left);
    preOrderSearch(node.right);
  }
return arr1
}

function inOrderSearch(node) {
  if (node !== null) {
      inOrderSearch(node.left);
    arr2.push(node.value);
    inOrderSearch(node.right);
  }
return arr2
}


const node = new BinarySearch(1);
node.left = new BinarySearch(2);
node.right = new BinarySearch(3);
node.left.left = new BinarySearch(4);
node.left.right = new BinarySearch(5);

console.log(preOrderSearch(node));
console.log(inOrderSearch(node));

