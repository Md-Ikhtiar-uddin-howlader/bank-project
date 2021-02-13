document.getElementById("login").addEventListener("click", function(){

    document.getElementById("loginForm").style.display ="none";
    document.getElementById("transactionArea").style.display ="block";

})

function addAmount(id,depositAmount){

    let depositNumbers = document.getElementById(id).innerText;

    depositNumbers = parseFloat(depositNumbers);

    const total = depositAmount + depositNumbers;

    document.getElementById(id).innerText = total;
}

function minusAmount(id,withdrawAmount){

    let withdrawNumbers = document.getElementById(id).innerText;

    withdrawNumbers = parseFloat(withdrawNumbers);

    const total = withdrawNumbers - withdrawAmount ;

    document.getElementById(id).innerText = total;
}

function getInputValue(id){
    let amount = document.getElementById(id).value;

    amount = parseFloat(amount);

    document.getElementById(id).value = "";

    return amount;
}

document.getElementById("deposit").addEventListener("click",function(){

    let depositAmount = getInputValue("inputDeposit");

    addAmount("totalDeposit",depositAmount);

    addAmount("totalBalance",depositAmount);
    
})



document.getElementById("withdraw").addEventListener("click",function(){

    let withdrawAmount =  getInputValue("inputWithdraw");

    addAmount("totalWithdraw",withdrawAmount);
    
    minusAmount("totalBalance",withdrawAmount);

    
})