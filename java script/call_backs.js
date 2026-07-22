function calculateArithmetic(a, b, arithmeticfinalfunction){
    const ans = arithmeticfinalfunction(a, b)
    return ans;
}

function sum(a, b){
    return a + b
}

function setTimeout(arithmeticfinalfunction, duration){
    Sleep(duration);
    arithmeticfinalfunction();
} 

const valuse = calculateArithmetic(1, 2, sum);
console.log(value);

