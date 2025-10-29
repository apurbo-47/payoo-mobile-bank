document.getElementById ('login-btn')
.addEventListener ('click', 
    function (event){
        event.preventDefault();
        const acountNumber = document.getElementById ('acount-number').value;
        const pin = document.getElementById ('pin').value;
        const convertedPin = parseInt(pin);
       
        if (acountNumber.length === 11) {
             
            if (convertedPin === 1234) {
                window.location.href = "./main.html"
            }
            else {
                alert ('pin incorrect');
            }    
        }

        else {
            alert ('need valid acount number');
        }
})