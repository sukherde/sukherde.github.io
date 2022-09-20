class Bank{

    static nextNumber;

    /**
     * Constructor for creating a new Bank object
     * @param {String} name bank name     
     * @param {Array} accounts an array of accounts for the bank object     
     */
    constructor(name, accounts){
        this._name = name;
        this._accounts = accounts;
    }

    /**
     * Adds an account
     * 
     * @returns {number} the overdraftLimit value
     */
    addAccount(){
        if(!Bank.nextNumber){
            Bank.nextNumber = 10000000;
        }
        const newAccount = new Account(Bank.nextNumber);
        this._accounts.push(newAccount);
        Bank.nextNumber++;
        return newAccount.getNumber();
    }

    /**
     * Adds a saving account
     * 
     * @returns {number} the overdraftLimit value
     */
    addSavingsAccount(interest){
        if(!Bank.nextNumber){
            Bank.nextNumber = 10000000;
        }
        const newAccount = new SavingAccount(Bank.nextNumber, interest);
        this._accounts.push(newAccount);
        Bank.nextNumber++;
        return newAccount.getNumber();
    }

    /**
     * Adds a checking account
     * 
     * @returns {number} the overdraftLimit value
     */
    addCheckingAccount(overdraft){
        if(!Bank.nextNumber){
            Bank.nextNumber = 10000000;
        }
        const newAccount = new CheckingAccount(Bank.nextNumber, overdraft);
        this._accounts.push(newAccount);
        Bank.nextNumber++;
        return newAccount.getNumber();
    }

     /**
     * Closes an account
     * 
     * @returns {number} the number - account number that will be closed
     */
      closeAccount(number){
        if(!number){
            throw Error("Account number must be provided to close an account!");
        }
        
        this._accounts = this._accounts.filter((acc) => acc.getNumber() !== number);
    }

    /**
     * Account report
     * 
     * @returns {String} account report in the bank
     */
     accountReport(){
        let res = "";
        this._accounts.forEach(element => {
            res += element + "\n";
        });
        return res;
    }

    /**
     * Performs needed actions at the end of the month
     * 
     * @returns {undefined}
     */
     endOfMonth() {
        let res = "";
        this._accounts.forEach(element => res += element.endOfMonth());
        return res;
    }
}