function contador(){
    let cuenta = 0//1 - 2
    return function incrementar(){
        cuenta++
        return cuenta
    }
}

const contar = contador()
console.log(contar())//1
console.log(contar())//2
console.log(contar())//3