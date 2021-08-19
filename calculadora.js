let a = window.prompt("Ingresa un numero"), b = window.prompt("ingresa el segundo numero");

a = parseInt(a), b = parseInt(b);

function taco(a, b) {
  return a + b;
}
function resta(a, b) {
  return a - b;
}

function residuo(a, b) {
  return a % b;
}

function division(a, b) {
  return a / b;
}

function multiplicacion(a, b) {
  return a * b;
}

console.log("la suma de los tacos comidos es:", taco(a, b));
console.log("la resta de los tacos comidos es:", resta(a, b));
console.log("el residuo de los tacos comidos es:", residuo(a, b));
console.log("la división de los tacos comidos es:", division(a, b));
console.log("la multiplicación de los tacos comidos es:", multiplicacion(a, b));
