import { makeAutoObservable } from 'mobx';

class itemsDataStore {
	items: Item[] = [
		{ id: 0, name: 'Cola', price: 50, count: 4 },
		{ id: 1, name: 'Sandwich', price: 75, count: 5 },
		{ id: 2, name: 'Snickers', price: 35, count: 10 },
		{ id: 3, name: 'KitKat', price: 40, count: 9 },
		{ id: 4, name: 'Bon Aqua', price: 60, count: 6 },
		{ id: 5, name: 'Lays', price: 90, count: 4 },
		{ id: 6, name: 'Choco Pie', price: 20, count: 8 },
		{ id: 7, name: 'Gold', price: 499, count: 2 },
		{ id: 8, name: 'Bubble Gum', price: 1, count: 99 },
	];
	currentItemId: number = -1;

	constructor() {
		makeAutoObservable(this);
	}

	reduceItem(id: number) {
		this.items[id].count -= 1;
	}

	changeCurrentItemId(id: number) {
		this.currentItemId = id;
	}
}

export const itemsStore = new itemsDataStore();
