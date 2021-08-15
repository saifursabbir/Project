// handle deposit button event
document.getElementById('diposit-button').addEventListener('click', function () {
    //get the amount depodited
    // console.log('deposit button clicked');

    const dipositInput = document.getElementById('diposit-input');

    const newDipositAmountText = dipositInput.value;
    // console.log(dipositAmount);
    const newDipositAmount = parseFloat(newDipositAmountText);

    // update diposit total
    const dipositTotal = document.getElementById('diposit-total');
    // console.log(dipositTotal.innerText);

    const previousDipositText = dipositTotal.innerText;
    const previousDipositAmount = parseFloat(previousDipositText);
    const newDipositTotal = previousDipositAmount + newDipositAmount;

    dipositTotal.innerText = newDipositTotal;

    // update acount balance
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    const newBalanceTotal = previousBalanceTotal + newDipositAmount;
    balanceTotal.innerText = newBalanceTotal;




    // clear the deposit input field 
    dipositInput.value = '';
});

// handle withdraw event hander

document.getElementById('withdraw-button').addEventListener('click', function () {
    //     console.log("clicked")
    const withdrawInput = document.getElementById('Withdraw-input');
    const withdrawAmountText = withdrawInput.value;
    const newWithdrawAmount = parseFloat(withdrawAmountText);
    console.log(newWithdrawAmount);

    // set withdraw total

    const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawText = withdrawTotal.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawText);

    const newWithdrawtotal = previousWithdrawTotal + newWithdrawAmount;

    withdrawTotal.innerText = newWithdrawtotal;

    // update balance
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceText);
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;

    balanceTotal.innerText = newBalanceTotal;



});