let body = document.body;
body.style.fontFamily = "sans-serif";
body.style.fontWeight = "bolder";
body.style.margin = "2rem 0"

let title = document.createElement('h1');
title.textContent = "Validating Web Forms";
title.style.textAlign = "center";
title.style.marginBottom = "0px";
body.appendChild(title);

let inputWrapper = document.createElement('div');
inputWrapper.style.display = "flex";
inputWrapper.style.flexDirection = "column";
inputWrapper.style.alignItems = "center";
inputWrapper.style.justifyContent = "center";
inputWrapper.style.margin = "4vh";
//inputWrapper.style.gap = "2vh";
body.appendChild(inputWrapper);

let firstNameInputDiv = document.createElement('div');
inputWrapper.appendChild(firstNameInputDiv);

let firstNameInputTitle = document.createElement('p');
firstNameInputTitle.classList = "input-txt";
firstNameInputTitle.textContent = "First Name";
firstNameInputDiv.appendChild(firstNameInputTitle);

let firstNameInput = document.createElement('input');
firstNameInputDiv.appendChild(firstNameInput);

let firstNameInputWarning = document.createElement('p');
firstNameInputWarning.classList = "input-warning-txt";
firstNameInputWarning.textContent = "First name must be alphanumeric and contain 3 - 16 characters";
firstNameInputDiv.appendChild(firstNameInputWarning);

let lastNameInputDiv = document.createElement('div');
inputWrapper.appendChild(lastNameInputDiv);

let lastNameInputTitle = document.createElement('p');
lastNameInputTitle.classList = "input-txt";
lastNameInputTitle.textContent = "Last Name";
lastNameInputDiv.appendChild(lastNameInputTitle);

let lastNameInput = document.createElement('input');
lastNameInputDiv.appendChild(lastNameInput);

let lastNameInputWarning = document.createElement('p');
lastNameInputWarning.classList = "input-warning-txt";
lastNameInputWarning.textContent = "Last name must be alphanumeric and contain 3 - 16 characters";
lastNameInputDiv.appendChild(lastNameInputWarning);

let emailInputDiv = document.createElement('div');
inputWrapper.appendChild(emailInputDiv);

let emailInputTitle = document.createElement('p');
emailInputTitle.classList = "input-txt";
emailInputTitle.textContent = "Email";
emailInputDiv.appendChild(emailInputTitle);

let emailInput = document.createElement('input');
emailInputDiv.appendChild(emailInput);

let emailInputWarning = document.createElement('p');
emailInputWarning.classList = "input-warning-txt";
emailInputWarning.textContent = "Email must be a valid address, e.g. example@example.com";
emailInputDiv.appendChild(emailInputWarning);

let passInputDiv = document.createElement('div');
inputWrapper.appendChild(passInputDiv);

let passInputTitle = document.createElement('p');
passInputTitle.classList = "input-txt";
passInputTitle.textContent = "Password";
passInputDiv.appendChild(passInputTitle);

let passInput = document.createElement('input');
passInputDiv.appendChild(passInput);

let passInputWarning = document.createElement('p');
passInputWarning.classList = "input-warning-txt";
passInputWarning.textContent = "Password must be alphanumeric (@._ and - are also allowed) and between 6 - 20 characters";
passInputDiv.appendChild(passInputWarning);

let telInputDiv = document.createElement('div');
inputWrapper.appendChild(telInputDiv);

let telInputTitle = document.createElement('p');
telInputTitle.classList = "input-txt";
telInputTitle.textContent = "Telephone";
telInputDiv.appendChild(telInputTitle);

let telInput = document.createElement('input');
telInputDiv.appendChild(telInput);

let telInputWarning = document.createElement('p');
telInputWarning.classList = "input-warning-txt";
telInputWarning.textContent = "A valid Telephone number (11 digits and 333-333-3334)";
telInputDiv.appendChild(telInputWarning);

let bioInputDiv = document.createElement('div');
inputWrapper.appendChild(bioInputDiv);

let bioInputTitle = document.createElement('p');
bioInputTitle.classList = "input-txt";
bioInputTitle.textContent = "Your bio";
bioInputDiv.appendChild(bioInputTitle);

let bioInput = document.createElement('input');
bioInputDiv.appendChild(bioInput);

let bioInputWarning = document.createElement('p');
bioInputWarning.classList = "input-warning-txt";
bioInputWarning.textContent = "Bio must contain only lowercase letters, underscores, hyphens and be 8 - 50 characters";
bioInputDiv.appendChild(bioInputWarning);

let submitBtn = document.createElement('button');
submitBtn.textContent = "Submit";
submitBtn.style.fontSize = "1.2rem";
submitBtn.style.border = "none";
submitBtn.style.backgroundColor = "#5c5c5c";
submitBtn.style.color = "#ffffff";
submitBtn.style.padding = "1.5vh 5vw";
submitBtn.style.borderRadius = "7px";
submitBtn.style.margin = "5vh";
inputWrapper.appendChild(submitBtn);

/* EVENT LISTENERS */
submitBtn.addEventListener('mouseenter', e => {
    submitBtn.style.backgroundColor = "#9c9c9c";
});

submitBtn.addEventListener('mouseleave', e => {
    submitBtn.style.backgroundColor = "#5c5c5c";
})


firstNameInput.addEventListener('change', e => {
    //console.log("change");
    regexf = /^\w+$/;
    inputValf = e.target;
    if (regexf.test(inputValf.value) && firstNameInput.value.length >= 3 && firstNameInput.value.length <= 16){
        //console.log("ok");
        firstNameInput.classList = "input-good";
        firstNameInputWarning.style.display = "none";
    } else {
        //console.log("error");
        firstNameInput.classList = "input-warning";
        firstNameInputWarning.style.display = "block";
    }
});

lastNameInput.addEventListener('change', e => {
    //console.log("change");
    regexl = /^\w+$/;
    inputVall = e.target;
    if (regexl.test(inputVall.value) && lastNameInput.value.length >= 3 && lastNameInput.value.length <= 16){
        //console.log("ok");
        lastNameInput.classList = "input-good";
        lastNameInputWarning.style.display = "none";
    } else {
        //console.log("error");
        lastNameInput.classList = "input-warning";
        lastNameInputWarning.style.display = "block";
    }
});

emailInput.addEventListener('change', e => {
    //console.log("change");
    regex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,3}$/i;
    emailVal = e.target;
    if (regex.test(emailVal.value)){
        //console.log("ok");
        emailInput.classList = "input-good";
        emailInputWarning.style.display = "none";
    } else {
        //console.log("error");
        emailInput.classList = "input-warning";
        emailInputWarning.style.display = "block";
    }
});

passInput.addEventListener('change', e => {
    //console.log("change");
    regex = /^[A-Za-z0-9@._-\S]+$/;
    passVal = e.target;
    if (regex.test(passVal.value) && passInput.value.length >= 6 && passInput.value.length <= 20){
        //console.log("ok");
        passInput.classList = "input-good";
        passInputWarning.style.display = "none";
    } else {
        //console.log("error");
        passInput.classList = "input-warning";
        passInputWarning.style.display = "block";
    }
});

telInput.addEventListener('change', e => {
    //console.log("change");
    regex = /^[0-9]+$/;
    telVal = e.target;
    if (regex.test(telVal.value) && telInput.value.length === 11){
        //console.log("ok");
        telInput.classList = "input-good";
        telInputWarning.style.display = "none";
    } else {
        //console.log("error");
        telInput.classList = "input-warning";
        telInputWarning.style.display = "block";
    }
});

bioInput.addEventListener('change', e => {
    //console.log("change");
    regex = /^[a-z_-\s]+$/;
    bioVal = e.target;
    if (regex.test(bioVal.value) && bioInput.value.length >= 8 && bioInput.value.length <= 50){
        //console.log("ok");
        bioInput.classList = "input-good";
        bioInputWarning.style.display = "none";
    } else {
        //console.log("error");
        bioInput.classList = "input-warning";
        bioInputWarning.style.display = "block";
    }
});