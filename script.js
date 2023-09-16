const formEl = document.querySelector('.form-subscribe');
const emailInput = formEl.querySelector('.form-subscribe__input');
const errorMsg = formEl.querySelector('.error-msg');


const validateEmail = email => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+/;
    return emailPattern.test(email);
}

const renderFormError = () => {
    errorMsg.classList.remove('hidden');
    formEl.classList.add('form-subscribe--error');
}

const cleanFormError = () => {
    errorMsg.classList.add('hidden');
    formEl.classList.remove('form-subscribe--error');
}

const cleanFormInput = () => {
    emailInput.value = '';
    emailInput.blur();
    cleanFormError();
}

const handleFormSubmit = event => {
    event.preventDefault();
    cleanFormError();
    
    const inputValue = emailInput.value.trim();
    if (validateEmail(inputValue)) {
        console.log(`Success! ${inputValue} registered.`);
        cleanFormInput();
        return;
    }

    renderFormError();
}

const handleKeyPress = event => {
    // Escape clean up form (even if form is not focused)
    if (event.key === 'Escape') {
        cleanFormInput();
        return;
    }

    // Sumbit form on Enter only if key is pressed on form
    if (event.key === 'Enter' && event.target === formEl) {
        handleFormSubmit(event);
        return;
    }
}

formEl.addEventListener('submit', handleFormSubmit);
formEl.addEventListener('keydown', handleKeyPress);
document.body.addEventListener('keydown', handleKeyPress);
