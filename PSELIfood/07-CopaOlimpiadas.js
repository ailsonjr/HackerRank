function solucao(ano) {
  if (ano % 4 === 0) {
    console.log("JOGOS");
  } else if (ano % 4 === 2) {
    console.log("COPA");
  } else {
    console.log("MEH");
  }
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
