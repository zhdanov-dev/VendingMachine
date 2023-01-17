import { makeAutoObservable } from 'mobx';

class modalDataStore {
	passwordIsCorrect: boolean = false;

	modalAddCash: boolean = false;
	modalPickUpChange: boolean = false;
	modalPassword: boolean = false;
	modalPickUpMoney: boolean = false;
	modalAddMoney: boolean = false;

	constructor() {
		makeAutoObservable(this);
	}

	changePasswordIsCorrect() {
		this.passwordIsCorrect = !this.passwordIsCorrect;
	}

	changeModalAddCash() {
		this.modalAddCash = !this.modalAddCash;
	}

	changeModalPickUpChange() {
		this.modalPickUpChange = !this.modalPickUpChange;
	}

	changeModalPassword() {
		this.modalPassword = !this.modalPassword;
	}

	changeModalPickUpMoney() {
		this.modalPickUpMoney = !this.modalPickUpMoney;
	}

	changeModalAddMoney() {
		this.modalAddMoney = !this.modalAddMoney;
	}
}

export const modalStore = new modalDataStore();
