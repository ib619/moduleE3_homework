
function oddEvenCount(arr) {

    let even_count = 0;
    let odd_count = 0;
    let zero_count = 0;
    let null_count = 0;

    // в описании задания неясно указано значение "нулевой элемент"
    // потому в массиве я отлавливаю и нули и null
    for(let i = 0; i < arr.length; i++) {
        if (typeof arr[i] == "number" && !(arr[i] == 0)) {
            let modulus = arr[i]%2;
            switch (modulus) {
                case 0:
                    even_count++;
                    break;
                case 1:
                    odd_count++;
                    break;
            }
        } else if (typeof arr[i] == "number" && (arr[i] == 0)) {
            zero_count++;
        } else if (arr[i] == null){
            null_count++;
        }
    }

    console.log("Колличество четных элементов - " + even_count);
    console.log("Колличество нечетных элементов - " + odd_count);
    console.log("Колличество нулей - " + zero_count);
    console.log("Колличество null элементов - " + null_count);

}

let arr = [1, 2, 3, 4, 0, null, 1, 0];
oddEvenCount(arr);