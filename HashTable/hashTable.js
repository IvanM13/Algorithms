function HashTable(size) {
    this.size = size;
    this.keys = this.initArray(size);
    this.values = this.initArray(size);
    this.limit = 0;
}

HashTable.prototype.initArray = function(size) {
    const array = [];
    for (let i = 0; i < size; i++) {
        array.push(null);        
    }
    return array;
}

HashTable.prototype.put = function(key, value) {
    if (this.limit >= this.size) throw 'hash table is full';

    let hashedIndex = this.hash(key);

    while(this.keys[hashedIndex] !== null){
        hashedIndex++;

        hashedIndex = hashedIndex % this.size;
    }

    this.keys[hashedIndex] = key;
    this.values[hashedIndex] = value;
    this.limit++;
}

HashTable.prototype.get = function(key) {
    let hashedIndex = this.hash(key);

    while (this.keys[hashedIndex] !== key) {
        hashedIndex++;

        hashedIndex = hashedIndex % this.size;
    }
    return this.values[hashedIndex];
}

HashTable.prototype.hash = function(key) {
    if (!Number.isInteger(key)) return 'must be int';
    return key % this.size;
}

const table = new HashTable(6);
table.put(3, "hello");
table.put(23, "sunny");
table.put(33, "world");
table.put(89, "hi");
table.put(12, "how");
table.put(45, "are");

console.log(table);
console.log(table.values[1]);

console.log(table.get(89));

// var exampletable = new HashTable(13);
// exampletable.put(7, "hi");
// exampletable.put(20, "hello");
// exampletable.put(33, "sunny");
// exampletable.put(46, "weather");
// exampletable.put(59, "wow");
// exampletable.put(72, "fourty");
// exampletable.put(85, "happy");
// exampletable.put(98, "sad");

// console.log(exampletable.get(59));

const table2 = new Map();

table2.set(12, "hello");
table2.set(13, "world");

console.log(table2);

