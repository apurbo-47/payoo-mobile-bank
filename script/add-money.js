document.getElementById ('add-money').addEventListener('click',
    function(event){
        event.preventDefault();
        const acountNumber = document.getElementById ('acount-number').value;
        const amount = document.getElementById ('amount').value;
        const convertedAmount = parseFloat (amount);
        const pin = document.getElementById ('pin').value;
        const convertedPin = parseInt (pin);
        const mainBalance = document.getElementById ('main-balance').innerText;
        const convertedMainBalance = parseFloat (mainBalance);
        const selectedBank = document.getElementById ('allBank').value;

            if (amount <0) {
                alert ('negative number not allowed')
                return;
            }

        if (convertedPin === 1234) {
                const sum = convertedMainBalance + convertedAmount ;
                document.getElementById ('main-balance').innerText= sum ;


            const container = document.getElementById ('transaction-container'); 

            const div = document.createElement ('div');
            div.classList.add ('bg-white', 'm-5', 'text-center', 'gap-2')
               div.innerHTML = `
               <h1> Added Money form: ${selectedBank} </h1>
               <h3> Amount: ${amount} Tk </h3>
               <p> Acount Number: ${acountNumber} </p>
               
               `
                container.appendChild (div);


                
        }
        else {
            alert ('enter valid pin');
        }
})








                // const p = document.createElement ('p');
            // p.innerText = `
            //   added ${amount} from ${acountNumber} acount
            // `
                // container.appendChild (p);