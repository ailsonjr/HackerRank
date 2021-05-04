

function solucao(n) {
  if(n % 2 !== 0) {
      console.log(true);
  } else {
       console.log(false);
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