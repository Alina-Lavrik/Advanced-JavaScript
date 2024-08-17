// Задание 2 (тайминг 35 минут)


class User {

    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }

};


class PremiumUser extends User {
    // установка срока действия на год
        premiumAccount = 0;
        setPremiumAccount(){
            this.premiumAccount = new Date().getFullYear() + 2;
        }
};


class RegularUser extends User {
}


function getAccountInfo(user){
    if (user instanceof PremiumUser) {
        return this.premiumAccount;
    } else if (user instanceof RegularUser) {
        console.log('Премиум аккаунта нет');
    } else {
        console.log(`Тип пользователя не определен`);
    }

}

// Создание объектов

const premUser = new PremiumUser('Misha', 'Ivanov');
const regUser = new RegularUser('Ulya', 'Titova');
premUser.setPremiumAccount();
const user1 = new User('POP', 'Popov');

// Проверка с помощью instanceof

console.log(premUser instanceof User); // true
console.log(regUser instanceof User);  // true

console.log(premUser); // PremiumUser {name: 'Misha', surname: 'Ivanov', premiumAccount: 2026}

console.log(regUser); // RegularUser {name: 'Ulya', surname: 'Titova'}

console.log(user1);