document.getElementById('update-addmoney').addEventListener('click', function (eventId){
        eventId.preventDefault();
        // console.log('add money updated');
        const inputadd=document.getElementById('input-addmoney').querySelector('input').value;
        const inputbalance=parseFloat(inputadd);
        const inputaddpin=document.getElementById('input-addpin').querySelector('input').value;
        // console.log(inputadd, inputaddpin);

        if(inputaddpin==='1234'){
            // console.log('thanks');
            const accountbalance=document.getElementById('account-balance').innerText;
            const newbalance=parseFloat(accountbalance);
            const newaddbalance=newbalance+inputbalance;
            console.log(accountbalance);
        }

        else{
            alert('Incorrect pin. Please try again');
        }
    })