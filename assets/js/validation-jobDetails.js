const fName = document.getElementById('fName')
const mobile = document.getElementById('mobile')
const codeMelli = document.getElementById('codeMelli')
const birthday = document.getElementById('birthday')
const city = document.getElementById('city')
const gender = document.getElementById('gender')

const form_JobDetails = document.getElementById('form-jobDetails')

const validFName = () => {
    const fName = document.getElementById("fName");
    const errorMessage = fName.nextElementSibling;
    if (!fName.value.trim()) {
        fName.classList.add("border-red-500");
        errorMessage.textContent = "لطفا نام خود را وارد کنید.";
        errorMessage.classList.remove("hidden");
        return false;
    } else {
        fName.classList.remove("border-red-500");
        errorMessage.textContent = "";
        errorMessage.classList.add("hidden");
        return true;
    }
}

const validmobile = () => {
    const lName = document.getElementById("mobile");
    const errorMessage = lName.nextElementSibling;
    if (!lName.value.trim()) {
        lName.classList.add("border-red-500");
        errorMessage.textContent = "لطفا شماره موبایل خود را وارد کنید.";
        errorMessage.classList.remove("hidden");
        return false;
    } else {
        lName.classList.remove("border-red-500");
        errorMessage.textContent = "";
        errorMessage.classList.add("hidden");
        return true;
    }
}

const validCodeMelli = () => {
    const codeMelli = document.getElementById("codeMelli");
    const errorMessage = codeMelli.nextElementSibling;
    if (!codeMelli.value.trim() || !/^\d{10}$/.test(codeMelli.value.trim())) {
        codeMelli.classList.add("border-red-500");
        errorMessage.textContent = "لطفا کد ملی معتبر (10 رقم) وارد کنید.";
        errorMessage.classList.remove("hidden");
        return false;
    } else {
        codeMelli.classList.remove("border-red-500");
        errorMessage.textContent = "";
        errorMessage.classList.add("hidden");
        return true;
    }
}

const validBirthday = () => {
    const birthday = document.getElementById("birthday");
    const errorMessage = birthday.nextElementSibling;
    if (!birthday.value.trim()) {
        birthday.classList.add("border-red-500");
        errorMessage.textContent = "لطفا تاریخ تولد خود را وارد کنید.";
        errorMessage.classList.remove("hidden");
        return false;
    } else {
        birthday.classList.remove("border-red-500");
        errorMessage.textContent = "";
        errorMessage.classList.add("hidden");
        return true;
    }
}

const validSelect = () => {
    const gender = document.getElementById("gender");
    const errorMessageGender = gender.nextElementSibling;
    const city = document.getElementById("city");
    const errorMessageCity = city.nextElementSibling;

    let isValid = true;

    if (gender.value === "جنسیت") {
        gender.classList.add("border-red-500");
        errorMessageGender.textContent = "لطفا جنسیت خود را انتخاب کنید.";
        errorMessageGender.classList.remove("hidden");
        isValid = false;
    } else {
        gender.classList.remove("border-red-500");
        errorMessageGender.textContent = "";
        errorMessageGender.classList.add("hidden");
    }

    if (city.value === "استان") {
        city.classList.add("border-red-500");
        errorMessageCity.textContent = "لطفا استان خود را انتخاب کنید.";
        errorMessageCity.classList.remove("hidden");
        isValid = false;
    } else {
        city.classList.remove("border-red-500");
        errorMessageCity.textContent = "";
        errorMessageCity.classList.add("hidden");
    }

    return isValid;
}

// تابع اعتبارسنجی برای توصیف
const validDescription = () => {
    const description = document.getElementById("description");
    const errorMessage = description.nextElementSibling;
    if (!description.value.trim()) {
        description.classList.add("border-red-500");
        errorMessage.textContent = "لطفا توانایی های خود را وارد کنید.";
        errorMessage.classList.remove("hidden");
        return false;
    } else {
        description.classList.remove("border-red-500");
        errorMessage.textContent = "";
        errorMessage.classList.add("hidden");
        return true;
    }
}
const validateAll = () => {
    if(validFName() && validmobile() && validSelect() && validCodeMelli() && validBirthday() &&  validDescription()){
        //     allow send Data
        return true;
    }else{
        return;
    }
}
form_JobDetails.addEventListener('submit' , (event) => {
    event.preventDefault()
    // alert('hi')
    validFName()
    validmobile()
    validCodeMelli()
    validBirthday()
    validSelect()



    fName.addEventListener('keyup' , validFName)
    mobile.addEventListener('keyup' , validmobile)
    codeMelli.addEventListener('keyup' , validCodeMelli)
    birthday.addEventListener('keyup' , validBirthday)
    city.addEventListener('change' , validSelect)
    gender.addEventListener('change' , validSelect)
    if(validateAll()){
    //     sendData
       form_JobDetails.submit();
    }

})

