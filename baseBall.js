const input = document.querySelector('#digits'),
    form = document.querySelector('form');

let userDigitsArr= [],
userDigits,
comDigits;

function resultText() {

}

function randomDigits() {
    const randomDigit = Math.floor(Math.random()*1000),
    randomDigitStr = randomDigit.toString();
    if(randomDigitStr.length === 2) {
        randomDigits();
    }   else if(randomDigitStr.includes('0')) {
        randomDigits();
    } else {
         comDigits = randomDigitStr;
         console.log(comDigits+' '+userDigits);
         resultText();
    };
};

function pushUserDigits() {
    userDigitsArr.push(userDigits);
    input.value="";
    userDigitsArr.length === 1 ? randomDigits() : resultText();
};

function warningAlerts(event) {
    event.preventDefault();
    userDigits = input.value; //typeof string
    if (userDigits.length !== 3) {
        alert('세자리 숫자를 입력하세요(Give me 3 digits).');
    } else if (userDigits.includes('0')) {
        alert('1 이상의 숫자를 입력하세요.(give me one or above');
    } else {
        pushUserDigits();
    };
};

function init() {
    form.addEventListener('submit', warningAlerts);
}

init();