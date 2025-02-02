// console.log('services');
document.getElementById('btn-update-addmoney').addEventListener('click', function (event){
    // console.log('hi');
    event.preventDefault();
    const addmoney=getInputFieldValuebyId('addmoney-amount');
    const pinnumber=getInputFieldValuebyId('addmoney-pin');

    //alert for NaN
    if(isNaN(addmoney)){
        alert('Failed to add money. Please take a Number.');
        return;
    }
    
    if(pinnumber===1234){
        const balance=getTextFieldValuebyId('account-balance');
        const newbalance=balance+addmoney;

        document.getElementById('account-balance').innerText=newbalance;
        //console.log(newbalance);

        //way number one
        // const p=document.createElement('p');
        // p.innerText=`Add Money: ${addmoney} tk && Current Balance: ${newbalance} tk`;
        // //console.log(p);
        //document.getElementById('history-container').appendChild(p);

        //way number two
        const div=document.createElement('div');
        div.classList.add('bg-green-500', 'text-center', 'w-50', 'rounded-lg','p-5','my-5');
        div.innerHTML=`
        <h2 class="text-xl">Add Money</h2>
        <p class=text-xs>Add Money= ${addmoney} && New-Balance= ${newbalance}</p>
        `
        document.getElementById('history-container').appendChild(div);

    }
    else{
        alert('Wrong PIN. Please try again');
    }
})



