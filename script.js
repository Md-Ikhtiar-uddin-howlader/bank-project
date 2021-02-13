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

document.getElementById("deposit").addEventListener("click",function(){

    let depositAmount = document.getElementById("inputDeposit").value;

    depositAmount = parseFloat(depositAmount);

    addAmount("totalDeposit",depositAmount);
    addAmount("totalBalance",depositAmount);

    document.getElementById("inputDeposit").value = "";
    
})



document.getElementById("withdraw").addEventListener("click",function(){

    let withdrawAmount = document.getElementById("inputWithdraw").value;

    withdrawAmount = parseFloat(withdrawAmount);

    addAmount("totalWithdraw",withdrawAmount);
    minusAmount("totalBalance",withdrawAmount);

    document.getElementById("inputWithdraw").value = "";
    
})