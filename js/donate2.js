document.getElementById('card2-donation-btn').addEventListener('click', function () {
    const inputValue = getInputFieldValueById('card2-input-field');
    const card2totalDonate = getFieldValueById('total-amount-card-2');
    const grandTotal = getFieldValueById('grand-total');
    const reliefForFeni = getTextById('flood-relief-feni');
    const historySection = document.getElementById('history-section');
    const d = new Date()


    if (inputValue <= 0 || isNaN(inputValue) || inputValue === '') {
        document.getElementById('card2-input-field').value = '';
        return alert('Please valid amount')
    }
    else {
        const totalAmount = card2totalDonate + inputValue;

        const grandTotalAmount = grandTotal - inputValue;

        if (grandTotalAmount < 0) {
            document.getElementById('card2-input-field').value = '';
            return alert('You have not enough money')
        }

        document.getElementById('total-amount-card-2').innerText = totalAmount;

        document.getElementById('grand-total').innerText = grandTotalAmount;

        document.getElementById('card2-input-field').value = '';

        document.getElementById('modal').classList.remove('hidden')

        const div = document.createElement('div');
        div.classList.add('border', 'p-5', 'rounded-md');
        div.innerHTML = `
        <p class='pb-3'>${inputValue} Taka is Donated for ${reliefForFeni}</p>
        <p>Date: ${d}</p>
        `;
        historySection.appendChild(div)
    }
})