const form = document.getElementById('form');
const fullname = document.getElementById('fullname');
const idCard = document.getElementById('id-card');
const faculty = document.getElementById('faculty');
const dateOfBirth = document.getElementById('date-of-birth');
const address = document.getElementById('address');
const output = document.getElementById('output');

form.addEventListener('submit', e => {
    e.preventDefault();
    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');
    errorDisplay.innerText = message;
    inputControl.classList.add('error');
}

const removeError = (element) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');
    errorDisplay.innerText = '';
    inputControl.classList.remove('error');
}

const isFullnameValid = (fullname) => {
    const regexp = /^[А-ЯІЇЄ][А-Яа-яІЇЄїіє]+\s[А-ЯІЇЄ].[А-ЯІЇЄ].$/
    return regexp.test(fullname);
}
const isIdCardValid = (idCard) => {
    const regexp = /^[А-ЯІЇЄ]{2}\s№[0-9]{6}$/
    return regexp.test(idCard);
}
const isFacultyValid = (faculty) => {
    const regexp = /^[A-ЯІЇЄ]{3,4}$/
    return regexp.test(faculty);
}
const isDateOfBirthValid = (dateOfBirth) => {
    const regexp = /^\d{2}\.\d{2}\.\d{4}$/
    return regexp.test(dateOfBirth);
}
const isAddressValid = (address) => {
    const regexp = /^м.\s[A-ЯІЇЄ][A-ЯІЇЄа-яіїє]+$/
    return regexp.test(address);
}

const validateInputs = () => {
    const fullnameValue = fullname.value;
    const idCardValue = idCard.value;
    const facultyValue = faculty.value;
    const dateOfBirthValue = dateOfBirth.value;
    const addressValue = address.value;

    if (!fullnameValue) {
        setError(fullname, 'Введіть ПІБ');
    } else if (!isFullnameValid(fullnameValue)) {
        setError(fullname, 'Перевірте правильність вводу');
    } else {
        removeError(fullname);
    }

    if (!idCardValue) {
        setError(idCard, 'Введіть ID-card');
    } else if (!isIdCardValid(idCardValue)) {
        setError(idCard, 'Перевірте правильність вводу');
    } else {
        removeError(idCard);
    }

    if (!facultyValue) {
        setError(faculty, 'Введіть факультет');
    } else if (!isFacultyValid(facultyValue)) {
        setError(faculty, 'Перевірте правильність вводу');
    } else {
        removeError(faculty);
    }

    if (!dateOfBirthValue) {
        setError(dateOfBirth, 'Введіть дату народження');
    } else if (!isDateOfBirthValid(dateOfBirthValue)) {
        setError(dateOfBirth, 'Перевірте правильність вводу');
    } else {
        removeError(dateOfBirth);
    }

    if (!addressValue) {
        setError(address, 'Введіть адресу');
    } else if (!isAddressValid(addressValue)) {
        setError(address, 'Перевірте правильність вводу');
    } else {
        removeError(address);
    }

    if (isFullnameValid(fullnameValue)
        && isIdCardValid(idCardValue)
        && isFacultyValid(facultyValue)
        && isDateOfBirthValid(dateOfBirthValue)
        && isAddressValid(addressValue)) {
        output.innerHTML = (`<h2>Отримані дані</h2>` +
        `<p><span class="bold-txt">ПІБ: </span>${fullname.value}</p>` +
        `<p><span class="bold-txt">ID-card: </span>${idCard.value}</p>` +
        `<p><span class="bold-txt">Факультет: </span>${faculty.value}</p>` +
        `<p><span class="bold-txt">Дата народження: </span>${dateOfBirth.value}</p>` +
        `<p><span class="bold-txt">Адреса: </span>${address.value}</p>`
        );
    }


};
