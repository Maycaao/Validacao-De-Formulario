function addErrors(input, element) {
    input.classList.add('error-active')
    element.containerErrors.style.display = 'flex';
    element.containerErrors.children[1].innerHTML = element.message || '';
}

function removeErrors(input, element) {
    input.classList.remove('error-active')
    element.containerErrors.style.display = 'none';
}

