const { sum, sayHello, fetchUser } = require('../functions');

// Basic test example
test('adds 1 + 2 to equal 3', () => {
    expect(sum(1,2)).toBe(3);
});

test('sayHello says hello', () => {
    expect(sayHello()).toBe('hello')
});

test('object assignment' , () => {
    const data = { one: 1};
    data['two'] = 2;
    expect(data).toEqual({one: 1, two: 2});
});

test('expect to be truthy', () => {
    expect(true).toBeTruthy();
});

let names = ['John', 'Ariel', 'Zach'];

test('names contains Ariel', () => {
    expect(names).toContain('Ariel')
});

test('user name is Leanne', async () => {
    expect.assertions(1);
    const data = await fetchUser();
    expect(data.name).toEqual('Leanne Graham');
});

let bankAccount = {
    balance: 1000,
    depositMoney(amount) {
        this.balance += amount;
    },
    withdrawMoney(amount) {
        this.balance -= amount;
    },
}

describe('Bank account methods and properties', () => {
    afterEach(() => {
        bankAccount.balance = 1000;
    });

    test('Initial balance is 1000', () => {
        expect(bankAccount.balance).toBe(1000);
    });

    test('Deposit money should correctly alter balance', () => {
        bankAccount.depositMoney(2000);
        expect(bankAccount.balance).toBe(3000);
    });

    test('Withdraw money should correctly alter balance', () => {
        bankAccount.withdrawMoney(500);
        expect(bankAccount.balance).toBe(500);
    });
})