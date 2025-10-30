document.getElementById ('transfer-btn').addEventListener ('click', 
    function (event) {
    event.preventDefault();
    const acountNumber = document.getElementById ('transfer-number').value;
    const pin = document.getElementById ('transfer-pin').value;
    const convertedPin = parseInt (pin);
    const amount = document.getElementById ('transfer-amount').value;
    const convertedAmount = parseFloat (amount);
    const mainBalance = document.getElementById ('main-balance').innerText;
    const convertedMainBalance = parseFloat (mainBalance);

    if (amount > mainBalance) {
                alert ('invalid amount')
                return;
            }    

    if (convertedPin === 1234) {
        const sum = convertedMainBalance - convertedAmount;
        document.getElementById ('main-balance').innerText = sum ;

        const container = document.getElementById ('transaction-container');
            
        const div = document.createElement ('div');
            div.classList.add ('bg-white', 'm-5', 'text-center', 'gap-2')
               div.innerHTML = `
               <h1> Transfer Money: </h1>
               <h3> Amount: ${amount} </h3>
               <p> Acount Number: ${acountNumber} </p>
               
               `
                container.appendChild (div);


    }
    else{
        alert ('enter valid pin');
    }
})