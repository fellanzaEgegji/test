const emriRe = /^[a-zA-Z]{3,20}$/;
const mbiemriRe = /^[a-zA-Z]{3,}$/;
const passwordRe = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

const form = document.getElementById('register-form');
const emri = document.getElementById('emri');
const mbiemri = document.getElementById('mbiemri');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('konfirmim');
const terms = document.getElementById('terms');

const emriError = document.getElementById('emriError');
const mbiemriError = document.getElementById('mbiemriError');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');
const confirmError = document.getElementById('confirmError');
const termsError = document.getElementById('termsError');
const formSuccess = document.getElementById('formSuccess');

function clearErrors(){
   [emriError, mbiemriError, emailError, passwordError, confirmError, termsError, formSuccess].forEach(el => el.textContent='');
}
function validateField(){
    clearErrors();
    let valid = true;

    if(!emriRe.test(emri.value.trim())){
        emriError.textContent= 'Emri nuk eshte i vlefshem!';
        valid=false;
    }
    if(!mbiemriRe.test(mbiemri.value.trim())){
        mbiemriError.textContent= 'Mbiemri i shkruar nuk eshte valid!';
        valid=false;
    }
    if(!emailRe.test(email.value.trim())){
        emailError.textContent= 'Email nuk eshte valid!';
        valid=false;
    }
    if(!passwordRe.test(password.value)){
        passwordError.textContent = 'Fjalekalimi nuk eshte valid!';
        valid=false;
    }
    if(password.value !== confirmPassword.value){
        confirmError.textContent = 'Fjalekalimet nuk perputhen';
        valid=false;
    }
    if(!terms.checked){
        termsError.textContent = 'Duhet te pranoni termat!';
        valid = false;
    }
    return valid;
}

emri.addEventListener('input',() => {if(emriRe.test(emri.value.trim())) emriError.textContent='';});
mbiemri.addEventListener('input',() => {if(mbiemriRe.test(mbiemri.value.trim())) mbiemriError.textContent='';});
email.addEventListener('input', () => {if(emailRe.test(email.value.trim())) emailError.textContent='';});
password.addEventListener('input', () => {if(passwordRe.test(password.value)) passwordError.textContent='';});
confirmPassword.addEventListener('input', () => {if(confirmPassword.value === password.value) confirmError.textContent='';});
form.addEventListener('submit', (e) =>{
    e.preventDefault();
    if(validateField()){
        formSuccess.textContent = 'Regjistrimi eshte kryer me sukses!';
        form.reset();

        setTimeout(() => {
            window.location.href = "loginform.html";
        }, 2000); 
    } else {
        formSuccess.textContent = "";
    }
});

