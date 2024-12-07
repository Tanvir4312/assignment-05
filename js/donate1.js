


document.getElementById('card1-donation-btn').addEventListener('click', function () {
    const inputValue = getInputFieldValueById('card1-input-field');
    const card1totalDonate = getFieldValueById('total-amount-card-1');
    const grandTotal = getFieldValueById('grand-total');

    
   

    if (inputValue <= 0 || isNaN(inputValue) || inputValue === '') {
        document.getElementById('card1-input-field').value = '';
        return alert('Please valid amount')
    }
    else {
        

        const totalAmount = card1totalDonate + inputValue;
        
    
        const grandTotalAmount =  grandTotal - inputValue;
        
    
        if(grandTotalAmount <= 0){
            document.getElementById('card1-input-field').value = '';
            return alert('You have not enough money')
        }

        document.getElementById('total-amount-card-1').innerText = totalAmount;
   
        document.getElementById('grand-total').innerText = grandTotalAmount;

        document.getElementById('card1-input-field').value = '';

        document.getElementById('modal').classList.remove('hidden')
    }
  
  
    




})






