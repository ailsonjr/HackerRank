function solucao(produtos) {
  const faturamento = {
    totalTop: 0,
    percentual: 0,
  };
  let total = 0;

  produtos.forEach((produto) => {
    total += produto.preco;
    if (produto.preco >= 10000) {
      faturamento.totalTop += produto.preco;
    }
  });

  faturamento.percentual = faturamento.totalTop / total;
  console.log(faturamento);
}

function processData(input) {
  solucao(JSON.parse(input));
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
