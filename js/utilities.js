function getInputFieldValueById (id) {
const inputValueString = document.getElementById(id).value;
const inputValue = parseFloat(inputValueString);
return inputValue;
}

function getFieldValueById (id) {
    const fieldValueString = document.getElementById(id).innerText;
    const fieldValue = parseFloat(fieldValueString);
    return fieldValue;
}


// Modal Close
document.getElementById('close-modal-btn').addEventListener('click', function(){
    document.getElementById('modal').classList.add('hidden')
})