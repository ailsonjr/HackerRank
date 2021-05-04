function solucao(a, b) {
  let contador = true;
  let resultado = [];
  let numPrimo = 2;

  while(contador) {
      if (a % numPrimo === 0 || b % numPrimo === 0) {
          
          if(a % numPrimo === 0) {
              a /= numPrimo;
          }
          
          if (b % numPrimo === 0) {
              b /= numPrimo;
          }
          resultado.push(numPrimo);
      }


      if(a % numPrimo !== 0 && b % numPrimo !== 0) {
          numPrimo += 1;
      }

      if(a === 1 && b === 1) {
          contador = false;
      }
  }
console.log(resultado.reduce((total, num) => total * num));
}

function processData(input) {
const pairs = input.split(" ");
const a = parseInt(pairs[0], 10);
const b = parseInt(pairs[1], 10);
solucao(a, b);
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