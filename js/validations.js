function validationEmptyFields(input, element) {
    if(!input.value || input.value.length < 3){
        addErrors(input, element);
    } else {
        removeErrors(input, element);
    }
}

function isEmailValid(input, element) {
    const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if(!regex.test(input.value)){
        addErrors(input, element);
    } else {
        removeErrors(input, element);
    }
}