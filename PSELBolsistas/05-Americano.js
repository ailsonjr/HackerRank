function solucao(numeros) {
  let s = numeros.reduce((acc, curr) => acc + curr);
  let i = 1
  for(s >= 0; s -= 1;){
      if(i >= numeros.length) {
          i = 1;  } else {
     i += 1
   }
 }
 console.log(i)
}

function processData(input) {
const strings = input.split(" ");
  const numeros = [];
for(let i = 0; i < strings.length; i++) {
      numeros.push(parseInt(strings[i] ,10))
  }
  solucao(numeros)
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