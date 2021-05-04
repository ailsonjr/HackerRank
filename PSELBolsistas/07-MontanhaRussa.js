function solucao(listaDePessoas) {
  let valorIngresso = 0;
  let valorMeioIngresso = 0;

  listaDePessoas.forEach((pessoa) => {
    if (
      pessoa.idade >= 12 &&
      pessoa.idade < 65 &&
      !pessoa.possuiPatologiaCardiaca &&
      pessoa.alturaEmCm >= 150
    ) {
      if (pessoa.idade < 18 || pessoa.ehEstudante) {
        valorMeioIngresso += 10;
      } else {
        valorIngresso += 20;
      }
    }
  });
  console.log(valorIngresso + valorMeioIngresso);
}

//Nao mexa em nada a partir daqui
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
