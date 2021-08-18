
function getInputValue(inputId) {
    const inputField = document.getElementById(inputId);
    const inputAmountText = inputField.value;
    const amountValue = parseFloat(inputAmountText);
    // clear input filed
    inputField.value = '';
    return amountValue;
};

function updateTotalField(totalFieldId, amount) {
    const totalElement = document.getElementById(totalFieldId);
    const totalText = totalElement.innerText;
    const previousTotal = parseFloat(totalText);

    totalElement.innerText = previousTotal + amount;
}

function getCurrentBalance() {
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    return previousBalanceTotal;

}

function updateBalance(amount, isAdd) {
    const balanceTotal = document.getElementById('balance-total');
    /*
     const balanceTotalText = balanceTotal.innerText;
     const previousBalanceTotal = parseFloat(balanceTotalText);
     */
    const previousBalanceTotal = getCurrentBalance();
    if (isAdd == true) {
        balanceTotal.innerText = previousBalanceTotal + amount;
    }
    else {
        balanceTotal.innerText = previousBalanceTotal - amount;
    }
};

document.getElementById('diposit-button').addEventListener('click', function () {
    /* const dipositInput = document.getElementById('diposit-input');
      const dipositAmountText = dipositInput.value;
      const dipositAmount = parseFloat(dipositAmountText);*/
    // get and update diposit total
    /* const dipositTotal = document.getElementById('diposit-total');
     const dipositTotalText = dipositTotal.innerText;
     const previousDipositTotal = parseFloat(dipositTotalText);
     dipositTotal.innerText = previousDipositTotal + dipositAmount;
    */
    // Update Balance
    /* const balanceTotal = document.getElementById('balance-total');
     const balanceTotalText = balanceTotal.innerText;
     const previousBalanceTotal = parseFloat(balanceTotalText);
     balanceTotal.innerText = previousBalanceTotal + dipositAmount;
     */
    const dipositAmount = getInputValue('diposit-input');
    if (dipositAmount > 0) {
        updateTotalField('diposit-total', dipositAmount);
        updateBalance(dipositAmount, true);
    }
});

// handle withdraw button
document.getElementById('withdraw-button').addEventListener('click', function () {
    /*const withdrawInput = document.getElementById('Withdraw-input');
    const withdrawAmountText = withdrawInput.value;
    const withdrawAmount = parseFloat(withdrawAmountText);*/
    //get and update withdraw total
    /*  const withdrawTotal = document.getElementById('withdraw-total');
      const previousWithdrawTotalText = withdrawTotal.innerText;
      const previousWithdrawTotal = parseFloat(previousWithdrawTotalText);
      withdrawTotal.innerText = previousWithdrawTotal + withdrawAmount;
  */
    // update balance after withdraw 
    /*   const balanceTotal = document.getElementById('balance-total');
       const balanceTotalText = balanceTotal.innerText;
       const previousBalanceTotal = parseFloat(balanceTotalText);
       balanceTotal.innerText = previousBalanceTotal - withdrawAmount;
   */
    const withdrawAmount = getInputValue("Withdraw-input");
    const currentBalance = getCurrentBalance();
    if (withdrawAmount > 0 && withdrawAmount < currentBalance) {
        updateTotalField('withdraw-total', withdrawAmount);
        updateBalance(withdrawAmount, false);
    }
    if (withdrawAmount > currentBalance) {
        console.log('You can not withdraw more than what you in your account');
    }
});
