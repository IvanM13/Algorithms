function largest(a, b, c, d){
    let larg = a;
    if(b > larg){
        larg = b;
    }
    if(c > larg){
        larg = c;
    }
    if(d > larg){
        larg = d;
    }
    return larg;
};

const max = (a, b, c, d) =>{
    if(a > b){
        if(a > c){
            if(a > d){
                return a;
            }else{
                return d;
            }
        }else{
            if(c > d){
                return c;
            }else{
                return d;
            }
        }
    }else{
        if(b > c){
            if(b > d){
                return b;
            }else{
                return d;
            }
        }else{
            if(c > d){
                return c;
            }else{
                return d;
            }
        }
    }
};

const largMas = (arr) => {
    let larg = arr[0];
    for(let i = 1; i < arr.length; i++){
        if(arr[i] > larg){
            larg = arr[i];
        }
    }
    return larg;
};

const minMas = (arr) => {
    let min = arr[0];
    for(let i = 1; i < arr.length; i++){
        if(arr[i] < min){
            min = arr[i];
        }
    }
    return min;
};

mass = [1,2,3,467,5,6,7,0];

console.log(`max from massive = ${largMas(mass)}`);

console.log(`min from massive = ${minMas(mass)}`);



console.log(`max = ${max(6547,287,4382367,873488)}`);

console.log(largest(1,2,3,4));