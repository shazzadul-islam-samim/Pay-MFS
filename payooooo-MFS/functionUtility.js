function getElementbyInputId(id){
    const input=document.getElementById(id).value;
    const inputNumber=parseFloat(input);
    return inputNumber;
}