// Задание 1



class BankAccount {
    // приватное свойство для хранения текущего баланса
    #balance = 0;

    // геттер для получения информацию о текущем балансе т.к. свойство баланса приватное

    get money() { // через данный метод можем достучаться до баланса
        return this.#balance;
    }

    set money(money) {
        this.#balance = money;
    }
    // конструктор для инициализации начального баланса

    constructor(money) {
        if (money < 0) {
            throw new Error('Отрицательный баланс счета');
        }
        this.#balance = money; // в приватное свойство записываем баланс
    }
 
    // метод для внесения средства на счет
    deposit(amount) {
        if (amount <= 0) {
            throw new Error('Сумма внесения должна быть больше нуля');
        }
        this.#balance += amount;
        return this.#balance;
    }

    // метод withdraw(amount) для снятия средства со счета
    withdraw(amount) {
        if (amount <= 0) {
            throw new Error('Сумма отрицательная');
        } else if (this.#balance - amount < 0) {
            throw new Error('Баланса недостаточно');
        }
        this.#balance -= amount;
        return this.#balance;
    }
}

let account = new BankAccount(500);
console.log(account.money); // 500

account.deposit(200);
console.log(account.money); // 700

account.withdraw(100);
console.log(account.money); // 600