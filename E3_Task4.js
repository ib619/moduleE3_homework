function counter(n1, n2){
    let i = n1
    let j = n2

    let timer = setInterval(cnt, 1000)

    function cnt(){
        if (i <= j) {
            console.log(i)
            i++
        }
        else {
            clearInterval(timer)
        }
    }
}

counter(5,15)