document.getElementById ('bonus-btn').addEventListener ('click', 
    function (event) {
    event.preventDefault();
        const acountNumber = document.getElementById ('getBonus-number').value;
       const mainBalance = document.getElementById ('main-balance').innerText;
       const convertedMainBalance = parseFloat (mainBalance);

       if (acountNumber.length === 6 ) {
            const sum = convertedMainBalance + 500 ;
            document.getElementById ('main-balance').innerText = sum ;

            const container = document.getElementById ('transaction-container');
            
        const div = document.createElement ('div');
            div.classList.add ('bg-white', 'm-5', 'text-center', 'gap-2')
               div.innerHTML = `
               <h1> Get bonus: </h1>
               <h3> 500 TK </h3>
               
               `
                container.appendChild (div);

       }
       else{
        alert ('enter valid cupon code');
       }
    })