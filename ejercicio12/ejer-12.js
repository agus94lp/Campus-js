let fibonacci = [1, 1];
let numero = 1;

function mostrar() {
  for (i = 2; i < 6; i++) {
    numero = fibonacci.at(-1) + fibonacci.at(-2);
    fibonacci.push(numero);
  }
}

mostrar();

console.log(fibonacci);