const gcd = (a, b) => {
    if (b === 0) {
        return a;
    }
    return gcd(b, (a % b));
}

console.log(gcd(24, 42));
console.log(gcd(30, 90));
console.log(gcd(60, 30));
console.log(gcd(90, 15));

console.log(gcd(81, 32));
console.log(gcd(206, 40));

class Poo{
    #color;
    #cirlce;
    constructor(cirlce = 89, color = 'red'){
        this.#cirlce = this.setCircle(cirlce);
        this.#color = this.setColor(color);
    }
    setColor(val){
        this.#color = val; 
    }

    getColor(){
        return this.#color;
    }
    setCircle(val){
        this.#cirlce = val;
    }


    foo(){
        return `cirle = ${}, color = ${this.#color}`;
    }
}

const f = new Poo(56, 'blue');
console.log(f.foo());

const g = new Poo(67);
console.log(g.foo());

const h = new Poo();
h.setColor('grey');
console.log(h.foo());