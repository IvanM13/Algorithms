function Queue(array){
    this.array = [];
    if(array) this.array = array;
}

Queue.prototype.getBuffer = function() {
    return this.array.slice();
}

Queue.prototype.isEmpty = function(){
    return this.array.length === 0;
}

Queue.prototype.peek = function(){
    return this.array[0];
}

Queue.prototype.enqueue = function(value){
    return this.array.push(value);
}

Queue.prototype.dequeue = function(){
    return this.array.shift();
}

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log(queue);
console.log(queue.getBuffer());
console.log(queue);
console.log(queue.peek());

console.log(queue.isEmpty());
queue.dequeue();
console.log(queue.getBuffer());
queue.dequeue();
queue.dequeue();
console.log(queue.isEmpty());
console.log(queue.getBuffer());



