function solucao(idade) {
  if (idade >= 18) {
    console.log("PODE ENTRAR");
  } else {
    console.log("ACESSO NEGADO");
  }
}

function processData(input) {
  solucao(parseInt(input.trim(), 10));
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
