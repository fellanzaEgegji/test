const emriMbiemriRe = /^[a-zA-Z\s]{3,}$/;
const passwordRe = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;

const form = document.getElementById('login-form');
const emriMbiemri = document.getElementById('emri-mbiemri');
const password = document.getElementById('password');

const emriMbiemriError = document.getElementById('emriMbiemriError');
const passwordError = document.getElementById('passwordError');
const formSuccess = document.getElementById('formSuccess');

function clearErrors(){
    [emriMbiemriError, passwordError].forEach(el => el.textContent='');
}

function validateField(){
    clearErrors();
    let valid = true;

    if(!emriMbiemriRe.test(emriMbiemri.value.trim())){
        emriMbiemriError.textContent = 'Emri dhe Mbiemri nuk jane valid!';
        valid = false;
    }
    if(!passwordRe.test(password.value)){
        passwordError.textContent = 'Fjalekalimi nuk eshte i sakte!';
        valid= false;
    }
    return valid;
}
emriMbiemri.addEventListener('input', () => {if(emriMbiemriRe.test(emriMbiemri.value.trim())) emriMbiemriError.textContent='';});
password.addEventListener('input', () => {if(passwordRe.test(password.value)) passwordError.textContent = '';});

form.addEventListener('submit', (e) =>{
    e.preventDefault();
    if(validateField()){
        formSuccess.textContent = 'Regjistrimi eshte kryer me sukses!';
        form.reset();

        setTimeout(() => {
            window.location.href = "home.html";
        }, 2000); 
    } else {
        formSuccess.textContent = "";
    }
});

