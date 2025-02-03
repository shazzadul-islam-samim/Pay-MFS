document.getElementById('btn-update-transfer').addEventListener('click', function (event){
    event.preventDefault();
    const transferAmount=getInputFieldValuebyId('transfer-amount');
    const transferPin=getInputFieldValuebyId('transfer-pin');

    //NaN
    if(isNaN(transferAmount)){
        alert('failed Transfer Money. Please Take a number');
        return;
    }

    if(transferPin===1234){
        const accountbalance=getTextFieldValuebyId('account-balance');

        //unsufficient
        if(accountbalance<transferAmount){
            alert('Unsufficient Balance. Please try again later.');
            return;
        }

        const newbalance=accountbalance-transferAmount;
        document.getElementById('account-balance').innerText=newbalance;

        //tr history
        const div=document.createElement('div');
        div.classList.add('bg-orange-500', 'text-center', 'w-50', 'rounded-lg','p-5','my-5');
        div.innerHTML=`
        <h2 class="text-xl">Transfer Money</h2>
        <p class=text-xs>Transfer Money= ${transferAmount} && New-Balance= ${newbalance}</p>
        `
        document.getElementById('history-container').appendChild(div);

    }
    else{
        alert('Wrong PIN. Please try again later');
    }
})