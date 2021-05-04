function solucao(n) {
  for(let i = 1; i <=10; i += 1) {
       console.log(n * i);
   }
}

function processData(input) {
 solucao(parseInt(input, 10));
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
