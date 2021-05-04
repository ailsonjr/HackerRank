function solucao(precos) {
  if (precos.length === 0) {
    console.log(0);
    return;
  }

  if (precos.length >= 5) {
    precos.sort((a, b) => a - b);
    precos.shift();
  }

  console.log(precos.reduce((total, preco) => total + preco));
}

function processData(input) {
  solucao(
    input
      .trim()
      .split(" ")
      .filter((x) => x)
      .map((x) => parseInt(x, 10))
  );
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
