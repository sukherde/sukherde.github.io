class SavingAccount extends Account{
    /**
     * Constructor for creating a new Saving account object that extends account
     * 
     * @param {number} number the number for this account
     * @param {number} interest the interest rate for this saving account
     */
     constructor(number, interest) {
        super(number);
        this._interest = interest; // saving account interest
    }

    /**
     * Getter for the 'public' interest field
     * 
     * @returns {number} the interest value
     */
    getInterest(){
        return this._interest;
    }

    /**
     * Setter for the 'public' interest field
     * 
     * @param {number} interest rate for the saving account
     * @returns {undefined}
     */
    setInterest(interest){
        this._interest = interest;
    }

     /**
     * Adds interest amoumt to the balance field
     * 
     * @returns {undefined}
     */
    addInterest(){
        const interestAmt = this._balance * this._interest / 100;
        this._balance += interestAmt;
    }

    /**
     * @returns {string} representation of this account
     */
    toString() {
        return "Saving account " + this._number + ": balance " + this._balance + "; interest rate: " + this._interest;
    }

    /**
     * Performs needed actions at the end of the month
     * 
     * @returns {undefined}
     */
     endOfMonth() {
        this.addInterest();
        return "Interest added SavingsAccount " + this.getNumber() + ": balance: " + this.getBalance() + "; interest: " + this.getInterest() + " ";    
    } 
}