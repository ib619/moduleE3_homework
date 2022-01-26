
function isPrime(number){
    if (number > 1000){
        return "Ошибка: Данные неверны число - больше 1000"
    }

    if (number%2 == 0 && number != 2 || number == 1 || number == 0){
        return "Не простое"
    }

    for(let i = 1; i < number; i++){
        let mod = number%1000;
        if (mod == 0){
            return "Не простое"
        }
    }

    return "Простое"

}

console.log(isPrime(26));