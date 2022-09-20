class CheckingAccount extends Account{
    /**
     * Constructor for creating a new Checking account object that extends account
     * 
     * @param {number} number the number for this account
     * @param {number} overdraftLimit the overdraft limit for this checking account
     */
     constructor(number, overdraftLimit) {
        super(number);
        this._overdraftLimit = overdraftLimit; // saving account interest
    }

    /**
     * Getter for the 'public' overdraftLimit field
     * 
     * @returns {number} the overdraftLimit value
     */
    getOverdraftLimit(){
        return this._overdraftLimit;
    }

    /**
     * Setter for the 'public' overdraftLimit field
     * 
     * @param {number} overdraftLimit for the checking account
     * @returns {undefined}
     */
    setOverdraftLimit(overdraftLimit){
        this._overdraftLimit = overdraftLimit;
    }

    /**
     * Method to take money out of the account
     * 
     * @param {number} amount money to be taken out of the account
     * @returns {undefined}
     * @throws {RangeError} when amount is less than or equal to zero
     * @throws {Error} when the account has insufficient funds (balance)
     */
     withdraw(amount) {
        if (amount <= 0) {
            throw new RangeError("Withdraw amount has to be greater than zero");
        }
        if (amount - this._balance > this._overdraftLimit) {
            throw Error("Insufficient funds. It exceeds overdraft limit.");
        }

        this._balance -= amount;
    }

    /**
     * @returns {string} representation of this account
     */
    toString() {
        return "Checking account " + this._number + ": balance " + this._balance + "; overdraft limit: " + this._overdraftLimit;
    }

    /**
     * Performs needed actions at the end of the month
     * 
     * @returns {undefined}
     */
     endOfMonth() {
        return "CheckingAccount " + this.getNumber() + ": balance: " + this.getBalance() + "; overdraft limit: " + this.getOverdraftLimit();        
    }

}