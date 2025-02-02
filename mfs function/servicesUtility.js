// console.log('services utility');
//findout for the input value
function getInputFieldValuebyId(id){
    const inputValue=document.getElementById(id).value;
    const inputnumber=parseFloat(inputValue);
    //console.log('2number',id,inputnumber);
    return inputnumber;
}

//find for text value
function getTextFieldValuebyId(id){
    const textvalue=document.getElementById(id).innerText;
    const textnumber=parseFloat(textvalue);
    return textnumber;
}

//show section by Id
function showSectionbyId(id){
    document.getElementById('addmoney-set').classList.add('hidden');
    document.getElementById('cashout-set').classList.add('hidden');
    document.getElementById('transfer-set').classList.add('hidden');
    document.getElementById('transaction-history').classList.add('hidden');
    
    document.getElementById(id).classList.remove('hidden');
    
}