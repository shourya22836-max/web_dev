// function sum(num1, num2) {
//     let result = num1 + num2
//     return result;
// }

// function displayresult(data) {
//     console.log("reuslt of the sum is : " + data);
// }

// const ans = sum(1, 2);
// displayresult(ans)

// we can do this in a single function call

function sum(num1, num2, fntocall) {
    let result = num1 + num2
    fntocall(result);
}

function displayresult(data) {
    console.log("reuslt of the sum is : " + data);
}

const ans1 = sum(1, 2, displayresult); //this called a callbacks

