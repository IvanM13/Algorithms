function DoublyLinkedListNode(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
}

function DoublyLinkedList() {
    this.head = null;
    this.tail = null;
    this.size = 0;
}

DoublyLinkedList.prototype.isEmpty = function(){
    return this.size == 0;
}

DoublyLinkedList.prototype.addAtFront = function(value){
    if (this.head === null) {
        this.head = new DoublyLinkedListNode(value);
        this.tail = this.head;
    } else {
        let temp = new DoublyLinkedListNode(value);
        temp.next = this.head;
        this.head.prev = temp;
        this.head = temp;
    }
    this.size++;
}

DoublyLinkedList.prototype.insertAtTail = function(value){
    if (this.tail === null) {
        this.tail = new DoublyLinkedListNode(value);
        this.head = this.tail;
    } else {
        let temp = new DoublyLinkedListNode(value);
        temp.prev = this.tail;
        this.tail.next = temp;
        this.tail = temp;
    }
    this.size++;
}

DoublyLinkedList.prototype.deleteAtHead = function(){
    let toReturn = null;

    if(this.head !== null){
        toReturn = this.head.data;

        if(this.tail === this.head){
            this.head = null;
            this.tail = null;
        }else{
            this.head = this.head.next;
            this.head.prev = null;
        }
    }
    this.size--;
    return toReturn;
}

DoublyLinkedList.prototype.deleteAtTail = function(){
    let toReturn = null;

    if(this.tail !== null){
        toReturn = this.tail.data;

        if(this.tail === this.head){
            this.head = null;
            this.tail = null;
        }else{
            this.tail = this.tail.prev;
            this.tail.next = null;
        }
    }
    this.size--;
    return toReturn;
}

DoublyLinkedList.prototype.findStartingHead = function(value){
    let currentHead = this.head;
    while (currentHead.next) {
        if (currentHead.data == value) {
            return currentHead;
        }
        currentHead = currentHead.next;
    }
    return false;
}

DoublyLinkedList.prototype.findStartingTail = function(value){
    let currentTail = this.tail;
    while (currentTail.prev) {
        if (currentTail.data == value) {
            return currentTail;
        }
        currentTail = currentTail.prev;
    }
    return false;
}

DoublyLinkedList.prototype.remove = function(value){
    let currentHead = this.head;
    if(currentHead.data == value){
        this.head = currentHead.next;
        this.size--;
    }else{
        let prev = currentHead;
        while (currentHead.next) {
            if(currentHead.data == value){
                prev.next = currentHead.next;
                prev = currentHead;
                currentHead = currentHead.next;
                break;
            }
            prev = currentHead;
            currentHead = currentHead.next;
        }
        if (currentHead.data == value) {
            prev.next = null;
    }

    this.size--;
    }
}


let dll1 = new DoublyLinkedList();
dll1.addAtFront(10);
dll1.addAtFront(12);
dll1.addAtFront(20);
dll1.insertAtTail('tail');
dll1.addAtFront('Head');
dll1.addAtFront(120)
dll1.deleteAtTail();
let r = dll1.findStartingHead(12);
console.log(r);
console.log(dll1.findStartingTail(10));