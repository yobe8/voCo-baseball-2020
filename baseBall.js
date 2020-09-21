const input = document.querySelector('#digits'),
    form = document.querySelector('form'),
    orderList = document.querySelector('.baseball__result__userDigits');

let userDigitsArr = [],
    userDigits,
    comDigits;

function checkSBO() {
    let strikeCount = 0,
        ballCount = 0,
        outCount = 0;

    for (var s = 0; s < 3; s++) {
        if(comDigits[s] === userDigits[s]) {
            strikeCount++;
        } else if (userDigits.includes(comDigits[s])) {
            ballCount++;
        } else {
            outCount++;
        }
    }
    console.log(strikeCount, ballCount, outCount);
}

function createLists() {
    console.log('good');
    const li = document.createElement('li')
    li.innerText = userDigits;
    orderList.appendChild(li);
    checkSBO();
}

function randomDigits() {
    const randomDigit = Math.floor(Math.random() * 1000),
        randomDigitStr = randomDigit.toString();
    if (randomDigitStr.length === 2) {
        randomDigits();
    } else if (randomDigitStr.includes('0')) {
        randomDigits();
    } else {
        comDigits = randomDigitStr;
        console.log(comDigits + ' ' + userDigits);
        createLists();
    };
};

function pushUserDigits() {
    userDigitsArr.push(userDigits);
    console.log(userDigitsArr);
    input.value = "";
    userDigitsArr.length === 1 ? randomDigits() : createLists();
};

function warningAlerts(event) {
    event.preventDefault();
    userDigits = input.value; //typeof string
    if (userDigits.length !== 3) {
        alert('세자리 숫자를 입력하세요(Give me 3 digits).');
    } else if (userDigits.includes('0')) {
        alert('1 이상의 숫자를 입력하세요(give me one or above).');
    } else {
        pushUserDigits();
    };
};

function init() {
    form.addEventListener('submit', warningAlerts);
}

init();