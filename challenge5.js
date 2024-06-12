class BankAccount {
    constructor(accountNumber, accountHolder, balance = 0) {
      this.accountNumber = accountNumber;
      this.accountHolder = accountHolder;
      this.balance = balance;
    }
  
    deposit(amount) {
      if (amount > 0) {
        this.balance += amount;
        console.log(`Deposit successful! New balance: $${this.balance}`);
      } else {
        console.log('Deposit amount must be positive.');
      }
    }
  
    withdraw(amount) {
      if (amount > 0 && amount <= this.balance) {
        this.balance -= amount;
        console.log(`Withdrawal successful! New balance: $${this.balance}`);
      } else if (amount > this.balance) {
        console.log('Insufficient funds.');
      } else {
        console.log('Withdrawal amount must be positive.');
      }
    }
  }
  
 
  const account = new BankAccount('123456', 'John Doe', 1000);
  console.log(account);
  
  account.deposit(500);
  account.withdraw(300);
  account.withdraw(1500);
  