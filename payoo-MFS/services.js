
        document.getElementById('update-addmoney').addEventListener('click', function (event) {
           
            
            const inputadd = document.getElementById('input-addmoney').querySelector('input').value;
            const inputbalance = parseFloat(inputadd);
            const inputaddpin = document.getElementById('input-addpin').querySelector('input').value;
            
            console.log(inputbalance, inputaddpin);
    
            if(inputaddpin === '1234') {
                console.log('hhhh');
                const accountbalance = document.getElementById('account-balance').innerText;
                console.log(accountbalance);
            } else {
                alert('Incorrect pin. Please try again');
            }
        });