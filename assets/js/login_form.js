// form
var loginBtn = document.querySelector('.js-header__login-btn');
var signUpBtn = document.querySelector('.js-header__signUp-btn');

var loginBox = document.querySelector('.js-login-body__container');
var signUpBox = document.querySelector('.js-signUp-body__container');

var footerSignUp = document.querySelector('.js-footer-signUp');

var inLoginTab = 1;

// language
var vietnamese = document.querySelector('.js-vietLang');
var english = document.querySelector('.js-engLang');

var viLangs = document.querySelectorAll('.language-vi');
var enLangs = document.querySelectorAll('.language-en');

var isViLanguage = 1;

// form

function FuncSignUp(){
    signUpBtn.classList.add('header__btn--select');
    signUpBox.classList.add('element-flex--show');

    footerSignUp.classList.add('element-block--show');

    loginBtn.classList.remove('header__btn--select');
    loginBox.classList.remove('element-flex--show');

    inLoginTab = 0;
    if(isViLanguage === 1){
        viLangs[viLangs.length-1].classList.add('element-block--show');
        enLangs[enLangs.length-1].classList.remove('element-block--show');
    }
    else if(isViLanguage === 0){
        enLangs[enLangs.length-1].classList.add('element-block--show');
        viLangs[viLangs.length-1].classList.remove('element-block--show');
    }      
};

function FunSignIn(){
    loginBtn.classList.add('header__btn--select');
    loginBox.classList.add('element-flex--show');

    signUpBtn.classList.remove('header__btn--select');
    signUpBox.classList.remove('element-flex--show');

    footerSignUp.classList.remove('element-block--show');

    inLoginTab = 1;
};
FunSignIn();
loginBtn.addEventListener('click' || 'touchstart', FunSignIn);
signUpBtn.addEventListener('click' || 'touchstart', FuncSignUp);

// language
function FuncVnese(){       //function hiện tiếng việt
    for(var viLang of viLangs){
        viLang.classList.add('element-block--show');
    }
    if(inLoginTab === 1) {
        viLangs[viLangs.length-1].classList.remove('element-block--show');
    }
    else if(inLoginTab === 0) {
        viLangs[viLangs.length-1].classList.add('element-block--show');
    }
    for(var enLang of enLangs){
        enLang.classList.remove('element-block--show');
    }
    isViLanguage = 1;
};
function FuncEng(){
    for(var enLang of enLangs){
        enLang.classList.add('element-block--show');
    }
    if(inLoginTab === 1) {
        enLangs[enLangs.length-1].classList.remove('element-block--show');
    }
    else if(inLoginTab === 0) {
        enLangs[enLangs.length-1].classList.add('element-block--show');
    }

    for(var viLang of viLangs){
        viLang.classList.remove('element-block--show');
    }
    isViLanguage = 0;
};

FuncEng();        //gọi nó ra để nó hiện tiếng việt lúc load trang.
vietnamese.addEventListener('click' || 'touchstart', FuncVnese);    //check click icon language vi
english.addEventListener('click' || 'touchstart', FuncEng); 