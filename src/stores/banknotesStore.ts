import { makeAutoObservable } from 'mobx';

class banknotesDataStore {
	banknotes: string[] = ['50', '100', '500', '1000'];

	constructor() {
		makeAutoObservable(this);
	}
}

export const banknotesStore = new banknotesDataStore();
