function sum(number) {
    return function (num1, num2=number){
        return num1+num2
    }
}

let res_func = sum(3);
let res = res_func(5);

console.log(res);