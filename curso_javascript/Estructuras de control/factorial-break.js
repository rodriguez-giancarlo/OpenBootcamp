//Este archivo debe calcular el factorial de 10 utilizando un bucle while, una bifurcación if y una sentencia break

let factorial = 7;
let i = factorial-1;
while(i < factorial){
    if(i == 0){
        break;
    }
    factorial= factorial * i
    i--;
}
console.log(factorial)