function addNumbers(num1, num2){
    var sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        const element = arguments[i];
        sum = sum + element;
    }

    return sum;
}

let result = addNumbers(3,2,5,7,1,9,13,56);
console.log(result);