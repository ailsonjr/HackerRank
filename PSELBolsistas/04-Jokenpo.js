function solucao(j, a) {
  let t = 'TESOURA';
  let p = 'PAPEL';
  let d = 'PEDRA';

  if(j === a) {
    console.log('EMPATE');
  } else if((j === d && a === t) || (j === p && a === d) || (j === t && a == p)){
    console.log('JOAO');
  } else {
    console.log('ANDRE')
  }
}


function processData(input) {
const pairs = input.split(" ");
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
