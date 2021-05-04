function solucao(numero) {
  while (numero >= 0) {
    console.log(numero);
    numero -= 1;
  }

  console.log("KABUM");
}

function processData(input) {
  solucao(parseInt(input, 10));
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
