import { makeAutoObservable } from 'mobx';

class balanceDataStore {
	userBalance: number = 0;
	bankBalance: Banknotes = {
		one: 10,
		five: 10,
		ten: 10,
		fifty: 10,
		hundred: 10,
		fiveHundred: 10,
		thousand: 0,
	};
	change: Banknotes = this.resetBalance();
	noMoney: boolean = false;
	remains: number = 0;
	possiblychange: number = 0;

	resetBalance() {
		return {
			one: 0,
			five: 0,
			ten: 0,
			fifty: 0,
			hundred: 0,
			fiveHundred: 0,
			thousand: 0,
		};
	}

	constructor() {
		makeAutoObservable(this);
	}

	addUserBalance(banknote: string) {
		this.userBalance += Number(banknote);
		if (Number(banknote) === 50) this.bankBalance.fifty += 1;
		if (Number(banknote) === 100) this.bankBalance.hundred += 1;
		if (Number(banknote) === 500) this.bankBalance.fiveHundred += 1;
		if (Number(banknote) === 1000) this.bankBalance.thousand += 1;
	}

	reduceUserBalance(price: number) {
		this.userBalance -= price;
	}

	resetUserBalance() {
		this.userBalance = 0;
	}

	resetBankBalance() {
		this.bankBalance = this.resetBalance();
	}

	calculateTheChange() {
		this.change = this.resetBalance();
		this.noMoney = false;
		this.remains = this.userBalance;
		while (this.remains > 0) {
			if (this.bankBalance.fiveHundred > 0 && this.remains >= 500) {
				this.change.fiveHundred += 1;
				this.bankBalance.fiveHundred -= 1;
				this.remains -= 500;
			} else if (this.bankBalance.hundred > 0 && this.remains >= 100) {
				this.change.hundred += 1;
				this.bankBalance.hundred -= 1;
				this.remains -= 100;
			} else if (this.bankBalance.fifty > 0 && this.remains >= 50) {
				this.change.fifty += 1;
				this.bankBalance.fifty -= 1;
				this.remains -= 50;
			} else if (this.bankBalance.ten > 0 && this.remains >= 10) {
				this.change.ten += 1;
				this.bankBalance.ten -= 1;
				this.remains -= 10;
			} else if (this.bankBalance.five > 0 && this.remains >= 5) {
				this.change.five += 1;
				this.bankBalance.five -= 1;
				this.remains -= 5;
			} else if (this.bankBalance.one > 0 && this.remains >= 1) {
				this.change.one += 1;
				this.bankBalance.one -= 1;
				this.remains -= 1;
			} else {
				this.noMoney = true;
				return;
			}
		}
	}

	getPossyblyChange() {
		return this.userBalance - this.remains;
	}

	checkBankBalance() {
		let result = 0;
		result = result + this.bankBalance.one * 1;
		result = result + this.bankBalance.five * 5;
		result = result + this.bankBalance.ten * 10;
		result = result + this.bankBalance.fifty * 50;
		result = result + this.bankBalance.hundred * 100;
		result = result + this.bankBalance.fiveHundred * 500;
		result = result + this.bankBalance.thousand * 1000;
		return result;
	}

	changeBankBalanceOne(one: number) {
		this.bankBalance.one = one;
	}

	changeBankBalanceFive(five: number) {
		this.bankBalance.five = five;
	}

	changeBankBalanceTen(ten: number) {
		this.bankBalance.ten = ten;
	}

	changeBankBalanceFifty(fifty: number) {
		this.bankBalance.fifty = fifty;
	}

	changeBankBalanceHundred(hundred: number) {
		this.bankBalance.hundred = hundred;
	}

	changeBankBalanceFiveHundred(fiveHundred: number) {
		this.bankBalance.fiveHundred = fiveHundred;
	}

	changeBankBalanceThousand(thousand: number) {
		this.bankBalance.thousand = thousand;
	}
}

export const balanceStore = new balanceDataStore();
