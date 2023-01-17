import { makeAutoObservable } from 'mobx';

class alertDataStore {
	alert: string = '';

	constructor() {
		makeAutoObservable(this);
	}

	setAlert(alert: string) {
		this.alert = alert;
	}
}

export const alertStore = new alertDataStore();
