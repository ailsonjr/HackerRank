function solucao(letra, palavras) {
  let perdeu = 0;
  for (fruta in palavras) {
    if (palavras[fruta][0] !== letra) {
      perdeu += 1;
    }
  }
  console.log(perdeu);
}

function processData(input) {
  const { letra, palavras } = JSON.parse(input)[0];
  solucao(letra, palavras);
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
