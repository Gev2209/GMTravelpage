function validationRegister () {
    const form = document.getElementById('form')
    const email = document.getElementById('email').value
    const pattern = /^[^ ]+@[^ ]+\.[a-z,A-Z]{2,3}$/;
    const text = document.getElementById('text')
    if(email.match(pattern)) {
        form.classList.add('valid');
        form.classList.remove('invalid');
        text.innerHTML = 'Your Email Address in Valid.';
        text.style.color = 'green';
    } else {
        form.classList.remove('valid');
        form.classList.add('invalid');
        text.innerHTML = 'Please Enter Valid Email Address';
        text.style.color = 'red' 
    }
    if(email === '') {
        form.classList.remove('valid');
        form.classList.remove('invalid');
        text.innerHTML = '';
        text.style.color = 'green';
    }
}

function validationLogin () {
    const loginForm = document.getElementById('loginForm');
    const loginEmail = document.getElementById('Email').value;
    const loginText = document.getElementById('loginText')
    const loginPattern = /^[^ ]+@[^ ]+\.[a-z,A-Z]{2,3}$/;

    if(loginEmail.match(loginPattern)) {
        loginForm.classList.add('valid');
        loginForm.classList.remove('invalid');
        loginText.innerHTML = 'Your Email Address in Valid.';
        loginText.style.color = 'white';
        // loginText.style.boxShadow = ' 0 0 10px black'
        loginText.style.borderBottom = '2px solid white'
        loginText.style.width = '50%'
        loginText.style.margin = 'auto'
    } else {
        loginForm.classList.remove('valid');
        loginForm.classList.add('invalid');
        loginText.innerHTML = 'Please Enter Valid Email Address';
        loginText.style.color = 'red'
        loginText.style.borderBottom = '1px solid red'
        loginText.style.width = '50%'
        loginText.style.margin = 'auto' 
    }
    if(loginEmail === '') {
        loginForm.classList.remove('valid');
        loginForm.classList.remove('invalid');
        loginText.innerHTML = '';
        loginText.style.color = 'green';
    }
}

export {
    validationRegister,
    validationLogin

}