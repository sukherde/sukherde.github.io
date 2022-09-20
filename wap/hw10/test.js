
let acc1 = new Account("310250111");
const expect = chai.expect;

describe("Account - getNumber", function(){
    it("New created account's number should be provided by getter function.", function(){
        assert.equal(acc1.getNumber(), "310250111");
    })
});

describe("Account - getBalance", function(){
    it("New created account's balance must be 0.0.", function(){
        assert.equal(acc1.getBalance(), 0.0);
    })
});

describe("Account - deposit", function(){
    it("After deposit, the balance has changed.", function(){
        acc1.deposit(1000);
        assert.equal(acc1._balance, 1000.0);
    })

    it("Deposit amount must be greater than 0.0", function(){        
        expect( () => acc1.deposit(-5) ).to.throw('Deposit amount has to be greater than zero');
    })
});

describe("Account - withdraw", function(){
    it("After withdraw, the balance has changed.", function(){
        acc1.withdraw(500);
        assert.equal(acc1._balance, 500.0);
    })

    it("Withdraw amount must be greater than 0.0", function(){        
        expect( () => acc1.withdraw(-5) ).to.throw('Withdraw amount has to be greater than zero');
    })
    it("Withdraw amount must not be greater than the balance", function(){        
        expect( () => acc1.withdraw(1000) ).to.throw('Insufficient funds');
    })
});

describe("Account - toString", function(){
    it("To string method should properly show the representation of this account", function(){        
        assert.equal(acc1.toString(), "Account 310250111: balance 500");
    })
});

describe("Account - endOfMonth", function(){
    it("endOfMonth does nothing so far", function(){        
        assert.equal(acc1.endOfMonth(), "");
    })
});

//SAVING ACCOUNT
let accSaving1 = new SavingAccount("410250112", 5.0);

describe("SavingAccount - getInterest", function(){
    it("Saving account's interest should be provided by getter function.", function(){
        assert.equal(accSaving1.getInterest(), 5.0);        
    })
});

describe("SavingAccount - setInterest", function(){
    it("Saving account's interest must changed by setter function.", function(){
        accSaving1.setInterest(3.0);
        assert.equal(accSaving1.getInterest(), 3.0);        
    })
});

describe("SavingAccount - addInterest", function(){
    it("Saving account's balance must changed by interest amount.", function(){
        accSaving1.deposit(1000);
        accSaving1.addInterest();
        assert.equal(accSaving1.getBalance(), 1030.0);        
    })
});

describe("SavingAccount - toString", function(){
    it("To string method should properly show the representation of this account", function(){        
        assert.equal(accSaving1.toString(), "Saving account 410250112: balance 1030; interest rate: 3");
    })
});

//CHECKING ACCOUNT
let check1 = new CheckingAccount("510250111", 100.0);

describe("CheckingAccount - getOverdraftLimit", function(){
    it("Checking account's overdraft limit should be provided by getter function.", function(){
        assert.equal(check1.getOverdraftLimit(), 100.0);        
    })
});

describe("CheckingAccount - setOverdraftLimit", function(){
    it("Checking account's overdraft limit should be changed by setter function.", function(){
        check1.setOverdraftLimit(200.0);
        assert.equal(check1.getOverdraftLimit(), 200.0);        
    })
});


describe("CheckingAccount - withdraw", function(){
    it("After withdraw, the balance has changed.", function(){
        check1.withdraw(100);
        assert.equal(check1._balance, -100.0);
    })

    it("Withdraw amount must be greater than 0.0", function(){        
        expect( () => check1.withdraw(-5) ).to.throw('Withdraw amount has to be greater than zero');
    })
    it("Withdraw amount must not exceed overdraft limit", function(){        
        expect( () => check1.withdraw(1000) ).to.throw('Insufficient funds. It exceeds overdraft limit.');
    })
});

//BANK

let bankMIU = new Bank("Bank of MIU", []);

describe("Bank - addAccount", function(){
    it("First bank account number must start from 10000000", function(){
        assert.equal(bankMIU.addAccount(), 10000000);        
    })
});

describe("Bank - addSavingsAccount", function(){
    it("Saving account number must be 10000001", function(){
        assert.equal(bankMIU.addSavingsAccount(3.0), 10000001);  
        bankMIU._accounts[1].deposit(1000);
    })
});

describe("Bank - addCheckingAccount", function(){
    it("Checking account number must be 10000002", function(){
        assert.equal(bankMIU.addCheckingAccount(100.0), 10000002);        
    })
});

describe("Bank - endOfMonth", function(){
    it("Bank endOfMonth should perform all accounts's endOfMonth operation", function(){
        assert.equal(bankMIU.endOfMonth(), "Interest added SavingsAccount 10000001: balance: 1030; interest: 3 CheckingAccount 10000002: balance: 0; overdraft limit: 100");        
    })
});
