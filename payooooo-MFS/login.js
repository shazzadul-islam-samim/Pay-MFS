document.getElementById('btn-login').addEventListener('click', function (event){
    event.preventDefault();
    const phonenumber= getElementbyInputId('phone-number');
    const pinnumber= getElementbyInputId('pin-number');

    if(pinnumber===1234){
        //console.log('hello green services');
        window.location.href='services.html';

    }
    else{
        alert('Wrong PIN. Please try again later.');
    }
})