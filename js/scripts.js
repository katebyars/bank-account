//Business Logic
function BankAccount(name, initdeposit){
  this.names = name;
  this.initdeposit = initdeposit;
  this.accountChanges = [];
}
function AccountChanges(deposit, withdraw, balance){
  this.deposit = deposit;
  this.withdraw = withdraw;
  this.balance = balance;
}

BankAccount.prototype.newAccount = function (name, initdeposit) {
  return this.initdeposit += 0;
}
BankAccount.prototype.currentBalance = function (initdeposit, deposit, withdraw, balance) {
  return newBalance = this.balance + this.deposit - this.withdraw;
}

//UI Logic
$(function(){
  $("form.newAccount").click(function(event){
    event.preventDefault();
    var inputtedName = $("#name").val();
    var inputtedInitDeposit = parseInt($("#initialDeposit").val());
    var openingBalance = new BankAccount(inputtedName, inputtedInitDeposit);
    $(".balanceArea").text("$" + openingBalance.newAccount());
    $("#initialDeposit").val("");


  $("button.depositWithdrawAmount").click(function(event){
    // event.preventDefault();
    $(".balanceArea").each(function(){
    var depositAmount = parseInt($(this).find("#depositAmount").val());
    var withdrawlAmount = parseInt($(this).find("#withdrawlAmount").val());
    var changeBalance = new AccountChanges(depositAmount, withdrawlAmount);
    openingBalance.accountChanges.push(changeBalance);
    $(".balanceArea").text("$" + changeBalance.currentBalance());
    //openingBalance.accountChanges.forEach(function(balance){
    //  $(".balancearea").append(BankAccount.currentBalance());
    //})
    // $(".balanceArea").text("$" + changeBalance.newAccount());
    $("#depositAmount").val("");
    $("#withdrawlAmount").val("");
  });
});
  });
});
