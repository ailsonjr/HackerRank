function solucao(largura, altura) {
  if (largura < altura) {
    console.log("RETRATO");
  } else if (largura > altura) {
    console.log("PAISAGEM");
  } else {
    console.log("QUADRADA");
  }
}

function processData(input) {
  const x = input.trim().split(" ");
  solucao(parseInt(x[0], 10), parseInt(x[1], 10));
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
