const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log("Bienvenido al Convertidor de Moneda");
console.log("Este programa convierte dólares a euros utilizando una tasa de cambio fija.");

rl.question("Por favor, ingresa la cantidad en dólares: ", (cantidadDolares) => {
  const tasaCambio = 0.8;
  const cantidadEuros = cantidadDolares * tasaCambio;

  console.log(`${cantidadDolares} dólares son aproximadamente ${cantidadEuros.toFixed(2)} euros.`);

  rl.close();
});
