let elForm = document.querySelector(".form");
let elName = document.querySelector(".form-name");
let elLName = document.querySelector(".form-lname");
let elEmail = document.querySelector(".form-email");
let elPassword = document.querySelector(".form-pass");
let elRPassword = document.querySelector(".form-rpass");
let elBtnPass = document.querySelector(".btn-pass");
let elBtnRPass = document.querySelector(".btn-rpass");
let elBlock = document.querySelector(".site-main__register");

//* Password show

elBtnPass.addEventListener("click", function(evt) {
    evt.preventDefault();
    
    if(elPassword.type == 'password') {
        elPassword.type = 'text';
    } else {
        elPassword.type = 'password';
    }
    
}) 

//* Repeat Password show

elBtnRPass.addEventListener("click", function(evt) {
    evt.preventDefault();
    
    if(elRPassword.type == 'password') {
        elRPassword.type = 'text';
    } else {
        elRPassword.type = 'password';
    }
    
}) 

//! Invalid elements 

let elNameWrapper = document.querySelector(".name-wrapper");
let elNameInvalid = document.querySelector(".name-invalid");

let elLNameWrapper = document.querySelector(".lname-wrapper");
let elLNameInvalid = document.querySelector(".lname-invalid");

let elEmailWrapper = document.querySelector(".email-wrapper");
let elEmailInvalid = document.querySelector(".email-invalid");

let elPasswordWrapper = document.querySelector(".password-wrapper");
let elPasswordInvalid = document.querySelector(".pass-invalid");

let elRPasswordWrapper = document.querySelector(".rpassword-wrapper");
let elRPasswordInvalid = document.querySelector(".rpass-invalid");



elForm.addEventListener("submit", function(evt) {
    evt.preventDefault();
    
    //* Name check
    
    if(elName.value.trim().length < 2 || elName.value.length > 30) {
        elNameWrapper.classList.add("invalid");
        elNameInvalid.style.display='block';
        return;
    } else {
        elNameWrapper.classList.remove("invalid");
        elNameInvalid.style.display='none';
    }
    
    let elNameValue = elName.value.trim();
    
    for( let i = 0; i < elNameValue.length; i++) {
        if((elNameValue[i] == '0') || (elNameValue[i] == '1') ||(elNameValue[i] == '2') ||(elNameValue[i] == '3') ||(elNameValue[i] == '4') ||(elNameValue[i] == '5') ||(elNameValue[i] == '6') ||(elNameValue[i] == '7') ||(elNameValue[i] == '8') ||(elNameValue[i] == '9')) {
            elNameWrapper.classList.add("invalid");
            elNameInvalid.style.display='block';
            return;
        } else {
            elNameWrapper.classList.remove("invalid");
            elNameInvalid.style.display='none';
        }
    }
    
    //* Last Name Check
    
    if(elLName.value.trim().length < 2 || elLName.value.length > 30) {
        elLNameWrapper.classList.add("invalid");
        elLNameInvalid.style.display='block';
        return;
    } else {
        elLNameWrapper.classList.remove("invalid");
        elLNameInvalid.style.display='none';
    }
    
    let elLNameValue = elLName.value.trim();
    
    for( let i = 0; i < elLNameValue.length; i++) {
        if((elLNameValue[i] == '0') || (elLNameValue[i] == '1') ||(elLNameValue[i] == '2') ||(elLNameValue[i] == '3') ||(elLNameValue[i] == '4') ||(elLNameValue[i] == '5') ||(elLNameValue[i] == '6') ||(elLNameValue[i] == '7') ||(elLNameValue[i] == '8') ||(elLNameValue[i] == '9')) {
            elLNameWrapper.classList.add("invalid");
            elLNameInvalid.style.display='block';
            return;
        } else {
            elLNameWrapper.classList.remove("invalid");
            elLNameInvalid.style.display='none';
        }
    }
    
    //* Email check
    
    if((elEmail.value.trim().endsWith('@gmail.com')) || (elEmail.value.trim().endsWith('@mail.ru'))) {
        elEmailWrapper.classList.remove("invalid");
        elEmailInvalid.style.display='none';
    } else {
        elEmailWrapper.classList.add("invalid");
        elEmailInvalid.style.display='block';
        return;
    }
    
    //* Password check
    
    
    if(!isNaN(elPassword.value.trim()) || (elPassword.value.trim().length < 8)) {
        elPasswordWrapper.classList.add("invalid");
        elPasswordInvalid.style.display='block';
        return;
    } else {
        elPasswordWrapper.classList.remove("invalid");
        elPasswordInvalid.style.display='none';
    }
    
    //* Password Repeat
    
    if (elRPassword.value.trim() != elPassword.value.trim()) {
        elRPasswordWrapper.classList.add("invalid");
        elRPasswordInvalid.style.display='block';
        return;
    } else {
        elRPasswordWrapper.classList.remove("invalid");
        elRPasswordInvalid.style.display='none';
    }
    
    //* Success Submit
    
    let elHero = document.querySelector(".site-main__hero");
    
    // if ((elName.value.trim().length >= 2 && elName.value.length <= 30) && (elLName.value.trim().length >= 2 && elLName.value.length <= 30) && ((elEmail.value.trim().endsWith('@gmail.com')) || (elEmail.value.trim().endsWith('@mail.ru'))) && (isNaN(elPassword.value.trim()) && (elPassword.value.trim().length >= 8)) && (elRPassword.value.trim() == elPassword.value.trim())) {
    //     elBlock.style.display='none';
    //     elHero.style.display='block';
    // }

    if(true) {
        elBlock.style.display='none';
        elHero.style.display='block';
    }
})

//& CONTACT DETAILS Validation

let elForma = document.querySelector(".hero__inner-form");
let elResultName = document.querySelector(".card__input--name");
let elResultEmail = document.querySelector(".card__input--email");
let elResultPhone = document.querySelector(".card__input--number");
let elResultCompany = document.querySelector(".card__input--company");
let elResultService1 = document.querySelector(".input-first");
let elResultService2 = document.querySelector(".input-second");
let elResultService3 = document.querySelector(".input-third");
let elResultService4 = document.querySelector(".input-fourth");


let elResultBudget1 = document.querySelector(".budget__input1");
let elResultBudget2 = document.querySelector(".budget__input2");
let elResultBudget3 = document.querySelector(".budget__input3");
let elResultBudget4 = document.querySelector(".budget__input4");


//* Text Content uchun elementlar

let elUserNameSpan = document.querySelector(".result__item-span-1");
let elUserEmailSpan = document.querySelector(".result__item-span-2");
let elUserContactSpan = document.querySelector(".result__item-span-3");
let elUserCompanySpan = document.querySelector(".result__item-span-4");
let elUserServiceSpan = document.querySelector(".result__item-span-5");
let elUserBuddgetSpan = document.querySelector(".result__item-span-6");



//? Validation uchun yangi elementlar

let elUserWrapper = document.querySelector(".card__label--name");
let elUserInvalid = document.querySelector(".error-name");

let elResultEmailWrapper = document.querySelector(".card__label--email");
let elResultEmailInvalid = document.querySelector(".error-email");

let elResultNumberWrapper = document.querySelector(".card__label--third");
let elResultNumberInvalid = document.querySelector(".error-number");

let elResultCompanyWrapper = document.querySelector(".card__label--third");
let elResultCompanyInvalid = document.querySelector(".error-number");

let elHeroSection = document.querySelector(".hero");
let elResultSection = document.querySelector(".result");


elForma.addEventListener("submit", function(evt){
    evt.preventDefault();
    
    //* User check
    
    if(elResultName.value.trim().length < 2 || elName.value.length > 30) {
        elUserWrapper.classList.add("invalid");
        elUserInvalid.style.display='block';
        return;
    } else {
        elUserWrapper.classList.remove("invalid");
        elUserInvalid.style.display='none';
    }
    
    
    
    let elUserNameValue = elResultName.value.trim();
    
    for( let i = 0; i < elUserNameValue.length; i++) {
        if((elUserNameValue[i] == '0') || (elUserNameValue[i] == '1') ||(elUserNameValue[i] == '2') ||(elUserNameValue[i] == '3') ||(elUserNameValue[i] == '4') ||(elUserNameValue[i] == '5') ||(elUserNameValue[i] == '6') ||(elUserNameValue[i] == '7') ||(elUserNameValue[i] == '8') ||(elUserNameValue[i] == '9')) {
            elUserWrapper.classList.add("invalid");
            elUserInvalid.style.display='block';
            return;
        } else {
            elUserWrapper.classList.remove("invalid");
            elUserInvalid.style.display='none';
        }
    }
    
    //* Email check
    
    if((elResultEmail.value.trim().endsWith('@gmail.com')) || (elResultEmail.value.trim().endsWith('@mail.ru'))) {
        elResultEmailWrapper.classList.remove("invalid");
        elResultEmailInvalid.style.display='none';
    } else {
        elResultEmailWrapper.classList.add("invalid");
        elResultEmailInvalid.style.display='block';
        return;
    }
    
    let userEmailResultValue = elResultEmail.value.trim();
    
    //* Phone Number check
    
    if(elResultPhone.value.trim().length < 12) {
        elResultNumberWrapper.classList.add("invalid");
        elResultNumberInvalid.style.display='block';
        return;
    } else {
        elResultNumberWrapper.classList.remove("invalid");
        elResultNumberInvalid.style.display='none';
    }
    
    let userNumberResultValue = elResultPhone.value.trim();
    
    //* Company check
    
    if (elResultCompany.value.trim().length >= 3 && elResultCompany.value.trim().length <= 20 ) {
        elResultCompanyWrapper.classList.remove("invalid");
        elResultCompanyInvalid.style.display='none';
    } else {
        elResultCompanyWrapper.classList.add("invalid");
        elResultCompanyInvalid.style.display='block';
        return;
    }
    
    let userCompanyResultValue = elResultCompany.value.trim();
    
    
    //* Service Get Value
    
    let elServiceValue = '';
    
    if(elResultService1.checked) {
        elServiceValue = elResultService1.value;
    }
    
    if(elResultService2.checked) {
        elServiceValue = elResultService2.value;
    }
    
    if(elResultService3.checked) {
        elServiceValue = elResultService3.value;
    }
    
    if(elResultService4.checked) {
        elServiceValue = elResultService4.value;
    }
    
    //* Budget Price Value
    
    let elBudgetValue = '';
    
    if(elResultBudget1.checked) {
        elBudgetValue = elResultBudget1.value;
    }
    
    if(elResultBudget2.checked) {
        elBudgetValue = elResultBudget2.value;
    }
    
    if(elResultBudget3.checked) {
        elBudgetValue = elResultBudget3.value;
    }
    
    if(elResultBudget4.checked) {
        elBudgetValue = elResultBudget4.value;
    }

    // ! Result for Showcase
    
    
    if(true) {
        elHeroSection.style.display='none';
        elResultSection.style.display='block';
        elUserNameSpan.textContent = elUserNameValue;
        elUserEmailSpan.textContent = userEmailResultValue;
        elUserContactSpan.textContent = userNumberResultValue;
        elUserCompanySpan.textContent = userCompanyResultValue;
        elUserServiceSpan.textContent = elServiceValue;
        elUserBuddgetSpan.textContent = elBudgetValue;
    }
    
    // console.log(userCompanyResultValue, userNumberResultValue, userEmailResultValue, elUserNameValue, elServiceValue, elBudgetValue);
    
})
