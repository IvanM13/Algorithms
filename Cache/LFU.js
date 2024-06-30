const fs = require('fs');

function LFUNode(key, value){
    this.prev = null;
    this.next = null;
    this.data = value;
    this.key = key;
}

function LFUDoublyLinkedList() {
    this.head = new LFUNode('buffer head', null);
    this.tail = new LFUNode('buffer tail', null);
    this.head.next = this.tail;
    this.tail.prev = this.head;
    this.size = 0;
}

function LFUCache(capacity) {
    this.keys = {};
    this.freq = {};
    this.capacity = capacity;
    this.freqCount = 1;
    this.minFreq = 0;
    this.size = 0;
}

LFUDoublyLinkedList.prototype.insertAtHead = function(node){
    node.next = this.head.next;
    this.head.next.prev = node;
    this.head.next = node;
    node.prev = this.head;
    this.size++;
}

LFUDoublyLinkedList.prototype.removeAtTail = function() {
    let oldTail = this.tail.prev;
    let prev = this.tail.prev;
    prev.prev.next = this.tail;
    this.tail.prev = prev.prev;
    this.size--;
    return oldTail;
}

LFUDoublyLinkedList.prototype.removeNode = function(node) {
    node.prev.next = node.next;
    node.next.prev = node.prev;
    this.size--;
}

LFUCache.prototype.set = function(key, value) {
    let node = this.keys[key];

    if (node == undefined) {
        node = new LFUCache(key, value);

        this.keys[key] = node;

        if (this.size != this.capacity) {
            if (this.freq[1] === undefined) {
                this.freq[1] = new LFUDoublyLinkedList();
            }
            this.freq[1].insertAtHead(node);
            this.size++;
        } else {
            let oldTail = this.freq[this.minFreq].removeAtTail();
            delete this.keys[oldTail.key];

            if(this.freq[1] === undefined){
                this.freq[1] = new LFUDoublyLinkedList();
            }

            this.freq[1].insertAtHead(node);
        }
        this.minFreq = 1;
    }else{
        let oldFreqCount = node.freqCount;
        node.data = value;
        node.freqCount++;

        this.freq[oldFreqCount].removeNode(node);

        if (this.freq[node.freqCount] === undefined) {
            this.freq[node.freqCount] = new LFUDoublyLinkedList();
        }

        this.freq[1].insertAtHead(node);

        if (oldFreqCount == this.minFreq && Object.keys(this.freq[oldFreqCount]).size == 0) {
            this.minFreq++;
        }

    }
}

LFUCache.prototype.get = function(key) {
    var node = this.keys[key];

    if (node == undefined) {
        return null;
    } else {

        var oldFreqCount = node.freqCount;
        node.freqCount++;

        this.freq[oldFreqCount].removeNode(node);

        if (this.freq[node.freqCount] === undefined) {
            this.freq[node.freqCount] = new LFUDoublyLinkedList();
        }

        this.freq[node.freqCount].insertAtHead(node);

        if (oldFreqCount == this.minFreq && Object.keys(this.freq[oldFreqCount]).length == 0) {
            this.minFreq++;
        }
        return node.data;
    }
}

var myLFU = new LFUCache(5);
myLFU.set(1, 1); // state of myLFU.freq: {1: 1}
myLFU.set(2, 2); // state of myLFU.freq: {1: 2<->1}
myLFU.set(3, 3); // state of myLFU.freq: {1: 3<->2<->1}
// console.log(myLFU.freq); // state of myLFU.freq: {1: 5<->4<->3, 4: 1, 2: 6}
myLFU.set(4, 4); // state of myLFU.freq: {1: 4<->3<->2<->1}
myLFU.set(5, 5); // state of myLFU.freq: {1: 5<->4<->3<->2<->1}
myLFU.get(1); // returns 1, state of myLFU.freq: {1: 5<->4<->3<->2, 3: 1}
myLFU.get(1); // returns 1, state of myLFU.freq: {1: 5<->4<->3<->2, 4: 1}
myLFU.get(1); // returns 1, state of myLFU.freq: {1: 5<->4<->3<->2, 2: 1}
myLFU.set(6, 6); // state of myLFU.freq: {1: 6<->5<->4<->3, 4: 1}
myLFU.get(6);
console.log(myLFU);

fs.appendFileSync(__filename, myLFU, function(error) {
    if (error) {
        return console.log(error);
    }
    console.log('win!');
});

