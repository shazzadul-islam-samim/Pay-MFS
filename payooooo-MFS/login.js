// console.log('have a good day')
document.getElementById('login-btn').addEventListener('click', function(event) {
    event.preventDefault();
    // console.log('hello hello')
    const phonenumber = document.getElementById('phone-number').value;
    // console.log(phonenumber.value);
    const pinnumber=document.getElementById('pin-number').value;
    console.log(phonenumber, pinnumber);

    if(phonenumber==='5' && pinnumber==='1234'){
        console.log('Thank you sir');
        window.location.href='home.html'; //for move another page
    }
    else{
        console.log('You are wrong.......')
    }
    
})