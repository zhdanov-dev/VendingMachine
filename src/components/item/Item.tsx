import { observer } from 'mobx-react-lite';
import { alertStore } from '../../stores/alertStore';
import { balanceStore } from '../../stores/balanceStore';
import { itemsStore } from '../../stores/itemsStore';
import styles from './Item.module.scss';

interface ItemProps {
	id: number;
	name: string;
	price: number;
	count: number;
}

function Item({ id, name, price, count }: ItemProps) {
	const changeUserBalance = (id: number, price: number) => {
		if (balanceStore.userBalance === 0) {
			alertStore.setAlert('Пожалуйста, внесите купюры.');
		} else if (balanceStore.userBalance < price) {
			alertStore.setAlert('Текущего баланса не достаточно.');
		} else {
			balanceStore.reduceUserBalance(price);
			itemsStore.reduceItem(id);
			itemsStore.changeCurrentItemId(id);
			alertStore.setAlert('');
		}
	};

	return (
		<div
			onClick={
				itemsStore.currentItemId < 0 && count
					? () => changeUserBalance(id, price)
					: () => {}
			}
			className={
				itemsStore.currentItemId < 0 && count > 0
					? styles.enabled__container
					: styles.disabled__container
			}
		>
			<span style={{ marginBottom: '10px', fontWeight: 'bold' }}>{name}</span>
			<span>Price: {price}</span>
			<span>Count: {count}</span>
		</div>
	);
}

export default observer(Item);
