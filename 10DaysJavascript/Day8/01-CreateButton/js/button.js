const button = document.getElementById('btn');
let count = 0;
button.innerHTML = count;

function counter () {
    count += 1;
  button.innerHTML = count;
}

button.addEventListener('click', counter);
