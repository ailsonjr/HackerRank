function solucao(j, a) {
  // Escreva seu código aqui
}

function processData(input) {
const pairs = input.split(" ");
const j = parseInt(pairs[0], 10);
const a = parseInt(pairs[1], 10);
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
