document.getElementById ('paybill-btn').addEventListener('click',
    function(event){
        event.preventDefault();
        const acountNumber = document.getElementById ('paybill-number').value;
        const amount = document.getElementById ('paybill-amount').value;
        const convertedAmount = parseFloat (amount);
        const pin = document.getElementById ('paybill-pin').value;
        const convertedPin = parseInt (pin);
        const mainBalance = document.getElementById ('main-balance').innerText;
        const convertedMainBalance = parseFloat (mainBalance);
        const selectBank = document.getElementById ('payBank').value;

            if (amount > mainBalance) {
                alert ('invalid amount');
                return;
            }

        if (convertedPin === 1234) {
                const sum = convertedMainBalance - convertedAmount ;
                document.getElementById ('main-balance').innerText= sum ;


            const container = document.getElementById ('transaction-container'); 

            const div = document.createElement ('div');
            div.classList.add ('bg-white', 'm-5', 'text-center', 'gap-2')
               div.innerHTML = `
               <h1> Pay Bill form: ${selectBank} </h1>
               <h3> Amount: ${amount} Tk </h3>
               <p> Bill Acount Number: ${acountNumber} </p>
               
               `
                container.appendChild (div);


                
        }
        else {
            alert ('enter valid pin');
        }
})