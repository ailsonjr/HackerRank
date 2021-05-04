function solucao(tempo, distancia) {
  let total = 0;
  let porTempo = 1;
  let porDistancia = 0.5;
  let centavos = 100;

  if (tempo <= 5) {
    total = 6 * centavos;
  } else if (tempo <= 60) {
    total = (tempo * porTempo + distancia * porDistancia) * centavos;
  } else if (distancia < 100) {
    porDistancia = 2;
    total = distancia * porDistancia * centavos;
  } else {
    porDistancia = 1.5;
    total = distancia * porDistancia * centavos;
  }
  console.log(total);
}

function processData(input) {
  const { tempo, distancia } = JSON.parse(input);
  solucao(tempo, distancia);
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
  _input += input;
});

process.stdin.on("end", function () {
  processData(_input);
});
