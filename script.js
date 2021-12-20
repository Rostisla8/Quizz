let questions = [
{
qeust: 'Вы гей?',
answ1: 'Да',
answ2: 'Нет',
answ3: 'Не знаю',
answ4: 'Может быть',
},
{
qeust: 'Где был слон, когда шел Наполеон?',
answ1: 'Москва',
answ2: 'Париж',
answ3: 'Поле',
answ4: 'Деревня',
},
{
qeust: 'Сколько будет 2+2*2?',
answ1: '2',
answ2: '16',
answ3: '8',
answ4: '6',
},
{
qeust: '?ьтсе ишу абл ешыВ',
answ1: 'Конечно!',
answ2: 'Что?',
answ3: 'Нет',
answ4: 'Иногда',
},
]

let right = ['Да' , 'Поле' , '6' , 'Нет'];


let i = 1;
let j = 0;
let count = 0;
let start = false;
let question = document.querySelector('.question');
let btns = document.querySelectorAll('.btn');
let btnStart = document.querySelector('.btn_start');

btnStart.addEventListener('click' , gameStart);
btns.forEach(function (a) {
    if(start == true){
        a.addEventListener('click' , function (event) {
            if(event.target.textContent == right[count]){
                alert('Вы правы!');
                count++;
                stage();
            }else{
               alert('Ложь') 
            }
            console.log(event.target.textContent)
        })
    }
   
})

function gameStart() {
if(start == false){
    stage();
}
start = true;
}

function stage(event) {
        btns.forEach(function(a){
        a.textContent = questions[count][`answ${i}`];
        i++;       
        })  
    question.textContent = questions[count]['qeust']; 
    i = 1;
}






