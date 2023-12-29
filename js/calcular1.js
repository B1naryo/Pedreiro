function calcularcomodo(event) {
  event.preventDefault(); // impede que a página seja recarregada

  const altura = document.getElementById("altura").value;
  const tipoTijolo = document.getElementById("tipoTijolo").value;

  let areaTijolo;

  if (tipoTijolo === "baiano6") {
    areaTijolo = 39; // área de um tijolo baiano de 6 furos
  } else if (tipoTijolo === "baiano8") {
    areaTijolo = 25; // área de outro tipo de tijolo de 8 furos
  } else if (tipoTijolo === "baiano9") {
    areaTijolo = 25; // área de outro tipo de tijolo de 9 furos
  } else if (tipoTijolo === "tijomamaciço") {
    areaTijolo = 75; // área de outro tipo de tijolo maciço
  } else if (tipoTijolo === "blocoestrutural") {
    areaTijolo = 13; // área de outro tipo de bloco estrutural 39x19cm
  } else if (tipoTijolo === "tijodeitadotipo1"){
    areaTijolo = 150; // áerea tijolinho deitado tipo1
  }
else{
    areaTijolo = 0; // área de um tijolo maciço
}

  let somaComprimentos = 0;

  // Somar os comprimentos dos cômodos
  const comprimentos = document.querySelectorAll(".comprimento");
  for (let i = 0; i < comprimentos.length; i++) {
    somaComprimentos += parseFloat(comprimentos[i].value);
  }

  const areaCasa = altura * somaComprimentos;
  const tijolos = Math.ceil(areaCasa * areaTijolo);
  const areia = (tijolos * 0.5) / 500;

  const resultado = document.getElementById("resultado");
  resultado.innerHTML = `Você vai precisar de ${areia} metros de areia para assentar ${tijolos} tijolos.`;
}

function calcularpiso(event) {
  event.preventDefault(); // impede que a página seja recarregada

  const altura = document.getElementById("altura").value;
  const tipoTijolo = document.getElementById("tipoTijolo").value;

  let areaTijolo;

  if (tipoTijolo === "baiano6") {
    areaTijolo = 0.15; // área de um tijolo baiano de 6 furos
  } else if (tipoTijolo === "baiano8") {
    areaTijolo = 0.15; // área de outro tipo de tijolo de 8 furos
  } else if (tipoTijolo === "baiano9") {
    areaTijolo = 0.15; // área de outro tipo de tijolo de 9 furos
  } else if (tipoTijolo === "tijomamaciço") {
    areaTijolo = 0.15; // área de outro tipo de tijolo maciço
  } else if (tipoTijolo === "blocoestrutural") {
    areaTijolo = 0.15; // área de outro tipo de bloco estrutural 39x19cm
  } else if (tipoTijolo === "tijodeitadotipo1"){
    areaTijolo = 0.15; // áerea tijolinho deitado tipo1
  }
else{
    areaTijolo = 0; // área de um tijolo maciço
}

  let somaComprimentos = 0;

  // Somar os comprimentos dos cômodos
  const comprimentos = document.querySelectorAll(".comprimento");
  for (let i = 0; i < comprimentos.length; i++) {
    somaComprimentos += parseFloat(comprimentos[i].value);
  }

  const areaCasa = altura * somaComprimentos;
  const tijolos = Math.ceil(areaCasa + areaTijolo);

  const resultado = document.getElementById("resultado");
  resultado.innerHTML = `A área do cômodo para assentar piso é ${tijolos} metros quadrados`;
}



function gerarInputs() {
  var qtdInputs = parseInt(document.getElementById("qtdInputs").value);
  var formulario = document.getElementById("formulario");

  // Remover inputs gerados dinamicamente existentes, se houver
  var inputsGerados = formulario.getElementsByClassName("input-gerado");
  while (inputsGerados.length > 0) {
    inputsGerados[0].parentNode.removeChild(inputsGerados[0]);
  }

  // Adicionar inputs de acordo com a quantidade especificada pelo usuário
  var totalComprimento = 0;
  for (var i = 1; i <= qtdInputs; i++) {
var input = document.createElement("input");
input.type = "number";
input.name = "comprimento[]";
input.placeholder = "Comprimento da parede " + i;
input.required = true;
input.classList.add("input-gerado");
input.classList.add("comprimento"); // Adicionando a classe "comprimento"
var label = document.createElement("label");
label.innerHTML = "Insira o comprimento da parede " + i + ":";
label.setAttribute("for", "comprimento-" + i);
formulario.appendChild(label);
formulario.appendChild(input);
formulario.appendChild(document.createElement("br"));
}

  // Mostrar resultado da soma dos comprimentos
  var resultado = document.getElementById("resultado");

}
function removerInputs() {
  var formulario = document.getElementById("formulario");
  var inputsGerados = formulario.getElementsByClassName("input-gerado");
  var box = document.querySelector('.box');
  var resultado = document.querySelector("#resultado");
  
  // Armazenar tamanho atual da div "box"
  var boxTamanhoAnterior = box.scrollHeight;
  
  // Remover inputs gerados dinamicamente existentes, se houver
  while (inputsGerados.length > 0) {
    var input = inputsGerados[0];
    var label = input.previousSibling; // obter o elemento label
    formulario.removeChild(label); // remover o elemento label
    formulario.removeChild(input); // remover o elemento input
    resultado.innerHTML = ""; // remover resultado
  }
  
  // Restaurar tamanho anterior da div "box"
  box.style.height = boxTamanhoAnterior + 'px';
}

