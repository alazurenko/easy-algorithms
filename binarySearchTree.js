/*TODO
  1. node removal
*/
function Node(data, left, right) {
  this.data = data;
  this.left = left || null;
  this.right = right || null;
}

Node.prototype.show = function() {
  return this.data;
}

function BST() {
  this.root = null;
}

BST.prototype.insert = function(data) {
  var n = new Node(data, null, null);
  if(this.root == null) {
    this.root = n;
  } else {
    var current = this.root;
    var parent;

    while(true) {
      parent = current;

      if(data < current.data) {
        current = current.left;
        if(current == null) {
          parent.left = n;
          break;
        }
      } else {
        current = current.right;
        if(current == null) {
          parent.right = n;
          break;
        }
      }
    }

  }
}

BST.prototype.inOrder = function(node) {
  var inOrder = function(n) {
    if(!(n == null)) {
      inOrder(n.left);
      console.log(n.show() + ' ');
      inOrder(n.right);
    }
  }
  return inOrder(node);
}

BST.prototype.preOrder = function(node) {
  var preOrder = function(n) {
    if(!(n == null)) {
      console.log(n.show() + ' ');
      preOrder(n.left);
      preOrder(n.right);
    }
  };
  return preOrder(node);
}

BST.prototype.postOrder = function(node) {
  var postOrder = function(n) {
    if(!(n == null)) {
      postOrder(n.left);
      postOrder(n.right);
      console.log(n.show() + ' ');
    }
  };

  return postOrder(node);
}

BST.prototype.getMin = function() {
  var current = this.root;
  while(!(current.left == null)) {
    current = current.left;
  }
  return current.data;
}

BST.prototype.getMax = function() {
  var current = this.root;
  while(!(current.right == null)) {
    current = current.right;
  }
  return current.data;
}

BST.prototype.find = function(data) {
  var current = this.root;
  while(current.data != data) {
    if(data < current.data) {
      current = current.left;
    } else {
      current = current.right;
    }
    if(current == null) {
      return null;
    }
  }
  return current;
}

// BST.prototype.getSmallest = function(node) {
//    return node.left;
// }
//
// BST.prototype.removeNode = function(node, data) {
//   if(node == null) {
//     return null;
//   }
//   if(data == node.data) {
//     //node has no children
//     if(node.left == null && node.right == null) {
//       return null;
//     }
//     //has no left children
//     if(node.left == null) {
//       return node.right;
//     }
//     //has no right children
//     if(node.right == null) {
//       return node.left;
//     }
//     //node has two childrens
//     var tempNode = this.getSmallest(node);
//     node.data = tempNode.data;
//     node.right = this.removeNode(node.right, tempNode.data);
//     return node;
//   } else if (data < node.data) {
//     node.left = this.removeNode(node.left, data);
//     return node;
//   } else {
//     node.right = this.removeNode(node.right, data);
//     return node;
//   }
// }
//
// BST.prototype.remove = function(data) {
//   root = this.removeNode(this.root, data);
// }

/*  Test area */

// var nums = new BST();
// var data = [23, 45, 16, 37, 3, 99, 22];
// data.forEach(function(num) {
//   nums.insert(num);
// });
