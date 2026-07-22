function square(n){
    return n * n
}

function sumofsquares(a, b){
    const val1 = square(a);
    const val2 = square(b);

    return val1 + val2
}

console.log(sumofsquares(1, 2));


////// we can also do

function square1(a){
    return a * a 
}

function sumofsomething(a, b, fn){
    const val1 = fn(a);
    const val2 = fn(a);
    return val1 + val2;
}

sumofsomething(2, 1, square)
