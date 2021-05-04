const res = document.getElementById('res');
const btns = document.querySelectorAll('.btns');
let operator = '';

function equal() {
    let total = res.innerText.split(operator);
    let num1 = parseInt(total[0], 2);
    let num2 = parseInt(total[1], 2);
  
    switch(operator) {
        case '+':
            res.innerText = ((num1 + num2) >>> 0).toString(2);
            break;
        case '-':
            res.innerText = ((num1 - num2) >>> 0).toString(2);
            break;
        case '*':
            res.innerText = ((num1 * num2) >>> 0).toString(2);
            break;
        case '/':
            res.innerText = ((num1 / num2) >>> 0).toString(2);
            break;
    }
    operator = '';
}

[...btns].forEach( btn => {
    btn.addEventListener('click', (e) => {
        switch (e.target.id) {
            case 'btnClr':
                res.innerText = '';
                break;
            case 'btnEql':
                equal();
                break;
            case 'btn0':
                res.innerText += 0;
                break;
            case 'btn1':
                res.innerText += 1;
                break;
        }

        if(res.innerText.length > 1 ) {
            switch(e.target.id) {
                case 'btnSum':
                    res.innerText += '+';
                    operator = '+';
                    break;
                 case 'btnSub':
                    res.innerText += '-';
                    operator = '-';
                    break;
                case 'btnMul':
                    res.innerText += '*';
                    operator = '*';
                    break;
                case 'btnDiv':
                    res.innerText += '/';
                    operator = '/';
                    break;
            }
        }
  });
});
