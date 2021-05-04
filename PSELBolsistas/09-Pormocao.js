function solucao(precos) {
  precos = precos.sort((a,b) => a - b);

  if (precos.length >= 3) {
    let maisBarato = precos.shift();
    maisBarato /= 2;
    precos.unshift(maisBarato);
  }

  console.log(precos.reduce((total, preco) => total + preco));  
}

//Não mexa em nada daqui para baixo

function processData(input) {
  const lista = input.split(" ");
  lista.forEach((x, i, a) => a[i] = parseInt(x, 10));
  solucao(lista);
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