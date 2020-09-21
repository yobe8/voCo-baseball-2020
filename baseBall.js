const input = document.querySelector('#digits'),
    form = document.querySelector('form');

let userCounts= [];
let comNumbers;

function resultAlert(userNumbers) {
        comNumbers !== userNumbers ? console.log('같지않음') : console.log('같음');
        console.log(comNumbers);
}

function randomDigits(userNumbers) {
    const comDigits = Math.floor(Math.random()*1000),
    comDigitsStr = comDigits.toString();
    if(comDigitsStr.length === 2) {
        randomDigits();
    }   else if(comDigitsStr.includes('0')) {
        randomDigits();
    } else {
         comNumbers = comDigitsStr;
         resultAlert(userNumbers);
    }
}

function warningAlerts(event) {
    event.preventDefault();
    let userDigits = input.value; //typeof string
    if (userDigits.length !== 3) {
        alert('세자리 숫자를 입력하세요(Give me 3 digits).');
    } else if (userDigits.includes('0')) {
        alert('1이상의 숫자를 입력하세요.');
    } else {
        userCounts.push(userDigits);
        input.value="";
        userCounts.length === 1 ? randomDigits(userDigits) : resultAlert(userDigits);
    };
};

function init() {
    form.addEventListener('submit', warningAlerts);
}

init();