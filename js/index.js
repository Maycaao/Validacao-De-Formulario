const firstName = document.getElementById('firstname');
const lastName = document.getElementById('lastname');
const email = document.getElementById('email');
const password = document.getElementById('password');
const msgError = 'Enter a valid value for'

function initApp() {
    addEventInElements(firstName, `${msgError} First Name`);
    addEventInElements(lastName, `${msgError} Last Name`);
    addEventInElements(email, 'Look like this is not an Email');
    addEventInElements(password, `${msgError} Password`);
}

function addEventInElements(element, message){
    element.addEventListener('blur', function(){
        createObject(element)
        if(element.type === 'text' || element.type === 'password'){
            validationEmptyFields(element, createObject(element, message));
        } else {
            isEmailValid(element, createObject(element, message));
        }
    })
}


function createObject(input, message) {
    return{
        containerErrors: input.parentNode.children[1],
        message: message
    }
}

initApp();