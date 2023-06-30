function calcularIMC(peso, altura) {
  var alturaEmMetros = altura / 100;
  var imc = peso / (alturaEmMetros * alturaEmMetros);
  return imc.toFixed(2);
}

var peso = 70;
var altura = 165;

var imc = calcularIMC(peso, altura);

alert("Seu IMC é: " + imc);