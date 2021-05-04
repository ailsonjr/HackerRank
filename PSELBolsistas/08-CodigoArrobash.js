function solucao(textoCodificado) {
  let textoDecoficado = "";

  for (let i = 0; i < textoCodificado.length; i += 3) {
    let simbolos = textoCodificado.slice(i, i + 3);

    switch (simbolos) {
      case "###":
        textoDecoficado += "C";
        break;
      case "##@":
        textoDecoficado += "U";
        break;
      case "#@#":
        textoDecoficado += "B";
        break;
      case "#@@":
        textoDecoficado += "A";
        break;
      case "@##":
        textoDecoficado += "D";
        break;
      case "@#@":
        textoDecoficado += "E";
        break;
      case "@@#":
        textoDecoficado += "M";
        break;
      case "@@@":
        textoDecoficado += "Y";
        break;
    }
  }
  console.log(textoDecoficado);
}

function processData(input) {
  solucao(input);
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
