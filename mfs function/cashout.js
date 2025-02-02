document.getElementById('btn-update-cashout').addEventListener('click', function (event){
    event.preventDefault();
    const cashout=getInputFieldValuebyId('cashout-amount');
    const cashoutpin=getInputFieldValuebyId('cashout-pin');

    //NaN
    if(isNaN(cashout)){
        alert('Fail to cash out. Please take a number');
    }

    if(cashoutpin===1234){
        const accountbalance=getTextFieldValuebyId('account-balance');
        const newbalance=accountbalance-cashout;

        //limit
        if(cashout>accountbalance){
            alert('Unsufficient Balance. Please try again later.');
            return;
        }

        document.getElementById('account-balance').innerText=newbalance;
        //console.log(newbalance);

        //append child div in history
        const div=document.createElement('div');
        div.classList.add('bg-red-500', 'text-center', 'w-50', 'rounded-lg','p-5','my-5');
        div.innerHTML=`
        <h2 class="text-xl">Cash Out</h2>
        <p class=text-xs>Cash Out= ${cashout} && New-Balance= ${newbalance}</p>
        `
        document.getElementById('history-container').appendChild(div);


    }
    else{
        alert('Wrong PIN');
    }
})