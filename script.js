const body = document.querySelector('body');
const themeBtns = document.querySelectorAll('.numeric');
const keyBtns = document.querySelectorAll('button');
let screen = document.querySelector('.display');
let btnTogle = document.querySelector('.btn-theme');
let toggle = false;
themeBtns.forEach((btn)=>{
    btn.addEventListener('click', (e)=>{
        let el = e.target;
        el = el.textContent;
        if(el == '3'){
            body.setAttribute('data-theme', 'three');
            btnTogle.style.left = '2.7em';

        }else if(el == '2'){
            body.setAttribute('data-theme', 'two');
            btnTogle.style.left = '1.3em';
        }else{
            body.setAttribute('data-theme', 'one');
            btnTogle.style.left = '0';
        }
    });
});
let arr = [];
keyBtns.forEach((btn)=>{
    btn.addEventListener('click', ()=>{
        let display = screen.textContent;
        let el = btn.textContent;
        let action = btn.dataset.action;
        arr.push(el);
        if(!action){
            if(display == '0' || arr.length == 0){
                screen.textContent = el;
                if(el == '.' && display === '0'){
                    screen.textContent = '0' + el;
                }
            }else{
                screen.textContent += el;
            }
        }else{
            arr.pop(el);
            if(action == 'reset'){
                arr = [];
                screen.textContent = '0';
            }else if(action == 'del'){
                if(arr.length == 1 || arr.length == 0){
                    arr = [];
                    screen.textContent = '0';
                }else{
                    arr.pop();
                    console.log(arr);
                    screen.textContent = arr.join("");
                }
            }else if(el == '+' || el == '-' || el == '-' || el == '*' || el == '/'){
                arr.push(el);
                screen.textContent = el;
            }else if(el == '='){
                arr = arr.join('');
                arr = eval(arr);
                screen.textContent = arr;
                arr= [screen.textContent]
            }else{
                console.log(el)
            }
        }
        console.log(arr);
    });
});

