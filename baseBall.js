const input = document.querySelector('#digits'),
    form = document.querySelector('form');

let userDigits;
let controlFn;  //controlFn이 warningAlerts() 안에 지역 변수로 있을 때는 계속 undefined를 리턴하다가 전역변수가 되니 1을 반환하는군. 훔. 왜지?

const USERCOUNTS_LS = 'userCounts'
const RANDOMDIGITS_LS = 'comDigits'

function resultAlert() {
    console.log('resultAlert');
}

function randomDigits() {
    console.log('randomDigits');
}

function warningAlerts(event) {
    userDigits = input.value; //typeof string
    event.preventDefault();
    if (userDigits.length !== 3) {
        alert('세자리 숫자를 입력하세요(Give me 3 digits).');
    } else if (userDigits.includes('0')) {
        alert('1이상의 숫자를 입력하세요.');
    } else {
        if(controlFn === undefined) {
            randomDigits();
            controlFn = 1;
        } else {
            resultAlert();
        };
    };
};

function init() {
    form.addEventListener('submit', warningAlerts);
}

init();