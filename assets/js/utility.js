
function getElementTextById(event){
    const element = document.getElementById(event);
    const text = element.innerText;
    return text;
}
function setElementValueById(elementId, value) {
    const element = document.getElementById(elementId);
    element.innerText = value;
}

