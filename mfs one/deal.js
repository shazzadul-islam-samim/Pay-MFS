//add money.................................................
const btnaddmoney=document.getElementById('btn-addmoney');
btnaddmoney.addEventListener('click', function (){
    const setadd=document.getElementById('addmoney-set');
    setadd.classList.remove('hidden');
})

document.getElementById('btn-update-addmoney').addEventListener('click', function (event){
    console.log('clicked');
    event.preventDefault();

    const addmoney=document.getElementById('addmoney-amount').value;
    const inputadd=parseFloat(addmoney);

    const addmoneypin=document.getElementById('addmoney-pin').value;
    const addpin=parseFloat(addmoneypin);

    //console.log(inputadd, addpin);
    if(addpin===1234){
        //console.log('correct pin');
        const balance=document.getElementById('account-balance').innerText;
        const accountbalance=parseFloat(balance);

        const newbalance=inputadd+accountbalance;

        document.getElementById('account-balance').innerText=newbalance;
    }
    else{
        alert('Wrong PIN. Please try again later');;
    }
})

//cash out.....................................................
const btncashout=document.getElementById('btn-cashout');
    btncashout.addEventListener('click', function (){
    const setcashout=document.getElementById('cashout-set');
    setcashout.classList.remove('hidden');
})
document.getElementById('btn-update-cashout').addEventListener('click', function (event){
    console.log('clicked');
    event.preventDefault();

    const cashout=document.getElementById('cash-amount').value;
    const inputout=parseFloat(cashout);

    const cashoutpin=document.getElementById('cashout-pin').value;
    const outpin=parseFloat(cashoutpin);

    //console.log(inputadd, addpin);
    if(outpin===1234){
        //console.log('correct pin');
        const balance=document.getElementById('account-balance').innerText;
        const accountbalance=parseFloat(balance);

        const newbalance=inputout-accountbalance;

        document.getElementById('account-balance').innerText=newbalance;
    }
    else{
        alert('Wrong PIN. Please try again later');;
    }
})