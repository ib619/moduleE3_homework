const power = (x, n) => {
    let arr = Array(n).fill(x)
    let res = arr.reduce(((previousValue, currentValue) => previousValue * currentValue ))
    return res
}

console.log(power(2,3))