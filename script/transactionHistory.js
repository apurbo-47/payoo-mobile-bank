document.getElementById ('transaction-box').addEventListener ('click',
    function (){
        handleToggle('addMoney', 'none');
        handleToggle('cashout', 'none');
        handleToggle('transaction-history', 'block');
})