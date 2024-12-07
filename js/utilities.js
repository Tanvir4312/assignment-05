function getInputFieldValueById(id) {
    const inputValueString = document.getElementById(id).value;
    const inputValue = parseFloat(inputValueString);
    return inputValue;
}

function getFieldValueById(id) {
    const fieldValueString = document.getElementById(id).innerText;
    const fieldValue = parseFloat(fieldValueString);
    return fieldValue;
}

function getTextById(id) {
    const text = document.getElementById(id).innerText;
    return text;
}

function showSection(id) {
    document.getElementById('donation-section').classList.add('hidden')
    document.getElementById('history-section').classList.add('hidden')

    const showSection = document.getElementById(id).classList.remove("hidden");
    return showSection
}

// Modal Close
document.getElementById('close-modal-btn').addEventListener('click', function () {
    document.getElementById('modal').classList.add('hidden')
})