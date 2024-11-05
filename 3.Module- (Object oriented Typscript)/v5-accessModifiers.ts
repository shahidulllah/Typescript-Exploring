{
    //
    class BankAccount {
        public readonly id: number;
        public name: string;
        private balance: number;

        constructor(id: number, name: string, balance: number) {
            this.id = id;
            this.name = name;
            this.balance = balance;
        }

        addDeposit (amount: number){
            this.balance = this.balance + amount;
        }

        getBalance (){
            return this.balance
        }

    }

    const goribManusherAccount = new BankAccount(222, "Mr. Fanus", 120);
    // goribManusherAccount.balance = 1223
    goribManusherAccount.addDeposit(500)
    const currentBalance = goribManusherAccount.getBalance()
    console.log(currentBalance, "============");
    
















    //
}