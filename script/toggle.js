
document.getElementById ('addMoney').style.display = 'block';
 document.getElementById ('cashout').style.display = 'none';
document.getElementById ('transaction-history').style.display = 'none';
document.getElementById ('transfer-money').style.display = 'none';
document.getElementById ('paybill').style.display = 'none';
document.getElementById ('get-bonus').style.display = 'none';

document.getElementById ('add-money-box').addEventListener ('click',
    function (){
       handleToggle ('addMoney', 'block');
       handleToggle ('cashout', 'none');
        handleToggle('transaction-history', 'none');
         handleToggle('transfer-money', 'none');
         handleToggle('paybill', 'none');
         handleToggle('get-bonus', 'none');
})

document.getElementById ('cashout-box').addEventListener ('click',
    function (){
       handleToggle ('addMoney', 'none');
       handleToggle ('cashout', 'block');
        handleToggle('transaction-history', 'none');
         handleToggle('transfer-money', 'none');
         handleToggle('paybill', 'none');
         handleToggle('get-bonus', 'none');
})







//  document.getElementById ('cashout').style.display = 'block';
        // document.getElementById ('addMoney').style.display = 'none';