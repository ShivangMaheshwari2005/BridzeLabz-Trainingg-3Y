class BankAccount {
    #balance;

    constructor(balance) {
        if (balance < 0) {
            throw new Error("Initial balance cannot be negative.");
        }
        this.#balance = balance;
    }

    deposit(amount) {
        if (amount <= 0) {
            throw new Error("Deposit amount must be greater than zero.");
        }
        this.#balance += amount;
    }

    withdraw(amount) {
        if (amount <= 0) {
            throw new Error("Withdrawal amount must be greater than zero.");
        }

        if (amount > this.#balance) {
            throw new Error("Insufficient balance!");
        }

        this.#balance -= amount;
    }

    getBalance() {
        return this.#balance;
    }
}

const account = new BankAccount(5000);

account.deposit(2000);
console.log("Balance after deposit:", account.getBalance());

try {
    account.withdraw(10000);
} catch (error) {
    console.log("Error:", error.message);
}

console.log("Final Balance:", account.getBalance());
