        //transaction-box //
document.getElementById ('transaction-box').addEventListener ('click',
    function (){
        handleToggle('addMoney', 'none');
        handleToggle('cashout', 'none');
        handleToggle('transfer-money', 'none');
        handleToggle('paybill', 'none');
        handleToggle('transaction-history', 'block');

})


        // transfer-box //
document.getElementById ('transfer-box').addEventListener ('click',
    function (){
        handleToggle('addMoney', 'none');
        handleToggle('cashout', 'none');
        handleToggle('transaction-history', 'none');
        handleToggle('paybill', 'none');
        handleToggle('transfer-money', 'block');
        
})


        // paybill-box //
document.getElementById ('paybill-box').addEventListener ('click',
    function (){
        handleToggle('addMoney', 'none');
        handleToggle('cashout', 'none');
        handleToggle('transaction-history', 'none');
        handleToggle('transfer-money', 'none');
        handleToggle('paybill', 'block');
        
})        