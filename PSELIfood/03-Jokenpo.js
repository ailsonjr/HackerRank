function solucao(joao, andre) {
  let t = "TESOURA";
  let p = "PAPEL";
  let d = "PEDRA";

  if (joao === andre) {
    console.log("EMPATE");
  } else if (
    (joao === d && andre === t) ||
    (joao === p && andre === d) ||
    (joao === t && andre == p)
  ) {
    console.log("JOAO");
  } else {
    console.log("ANDRE");
  }
}

function processData(input) {
  const pairs = input.trim().split(" ");
  const j = pairs[0];
  const a = pairs[1];
  solucao(j, a);
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
