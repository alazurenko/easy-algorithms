function Node(value) {
  this.value = value;
  this.next = null;
}

function LinkedList() {
  this.head = null;
  this.tail = null;
}

LinkedList.prototype.add = function(value) {
  var node = new Node(value);
  if(this.head == null) {
    this.head = node;
  }
  if(this.tail != null) {
    this.tail.next = node;
  }
  this.tail = node;
}
