const login=document.getElementById('btn-login');
login.addEventListener('click', function (event){
    event.preventDefault();
    
    const inputpn=document.getElementById('phone-number').value;
    const phonenumber=parseFloat(inputpn);

    const inputpin=document.getElementById('pin-number').value;
    const pinNumber=parseFloat(inputpin);

    // console.log(inputnumber, inputpinNumber);
    if(pinNumber===1234){
        console.log('correct pin');
        window.location.href='services.html';

    }
    else{
        alert('You are wrong');
    }
})