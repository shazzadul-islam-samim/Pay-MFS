// console.log('services');
document.getElementById('btn-update-addmoney').addEventListener('click', function (event){
    // console.log('hi');
    event.preventDefault();
    const addmoney=getInputFieldValuebyId('addmoney-amount');
    const pinnumber=getInputFieldValuebyId('addmoney-pin');
    
    if(pinnumber===1234){
        const balance=getTextFieldValuebyId('account-balance');
        const newbalance=balance+addmoney;

        document.getElementById('account-balance').innerText=newbalance;
        //console.log(newbalance)
    }
    else{
        alert('Wrong PIN. Please try again');
    }
})

