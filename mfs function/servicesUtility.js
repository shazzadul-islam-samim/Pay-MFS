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