import { observer } from 'mobx-react-lite';
import styles from './App.module.scss';
import Button from './components/button/Button';
import Item from './components/item/Item';
import ModalAddCash from './components/modal/modalAddCash/ModalAddCash';
import { balanceStore } from './stores/balanceStore';
import { itemsStore } from './stores/itemsStore';
import { modalStore } from './stores/modalStore';
import { alertStore } from './stores/alertStore';
import ModalPickUpChange from './components/modal/modalPickUpChange/ModalPickUpChange';
import ModalPassword from './components/modal/modalPassword/ModalPassword';
import ModalPickUpMoney from './components/modal/modalPickUpMoney/ModalPickUpMoney';
import ModalAddMoney from './components/modal/modalAddMoney/ModalAddMoney';

function App() {
	const openModalAddCash = () => {
		modalStore.changeModalAddCash();
		alertStore.setAlert('');
	};

	const openModalPickUpChange = () => {
		if (itemsStore.currentItemId >= 0) {
			alertStore.setAlert('Пожалуйста, заберите товар.');
		} else {
			balanceStore.calculateTheChange();
			modalStore.changeModalPickUpChange();
			alertStore.setAlert('');
		}
	};

	const openModalPassword = () => {
		modalStore.changeModalPassword();
	};

	const openModalPickUpMoney = () => {
		modalStore.changeModalPickUpMoney();
	};

	const openModalAddMoney = () => {
		modalStore.changeModalAddMoney();
	};

	const pickupItem = () => {
		itemsStore.changeCurrentItemId(-1);
		alertStore.setAlert('');
	};

	return (
		<div className={styles.container}>
			{alertStore.alert && (
				<div className={styles.alert}>{alertStore.alert}</div>
			)}
			<div className={styles.vending}>
				<div className={styles.tech__section}>
					{modalStore.passwordIsCorrect ? (
						<>
							<Button onClick={openModalPickUpMoney} text={'Забрать купюры'} />
							<Button onClick={openModalAddMoney} text={'Внесити купюры'} />
						</>
					) : (
						<Button onClick={openModalPassword} text={'Войти'} />
					)}
				</div>
				<div className={styles.items}>
					{itemsStore.items.map((item: Item, key: number) => {
						return (
							<Item
								id={item.id}
								name={item.name}
								price={item.price}
								count={item.count}
								key={key}
							/>
						);
					})}
				</div>
				<div className={styles.main__section}>
					<div className={styles.buttons}>
						{balanceStore.userBalance > 0 && (
							<div className={styles.button__container}>
								<span style={{ marginRight: '20px' }}>Ваш баланс:</span>
								<div className={styles.balance}>{balanceStore.userBalance}</div>
							</div>
						)}
						<div className={styles.button__container}>
							<span style={{ marginRight: '20px' }}>1.</span>
							<Button onClick={openModalAddCash} text={'Внесите купюры'} />
						</div>
						<div className={styles.button__container}>
							<span style={{ marginRight: '20px' }}>2.</span>
							<span>Выберете товар</span>
						</div>
						<div className={styles.button__container}>
							<span style={{ marginRight: '20px' }}>3.</span>
							<span>Получите товар</span>
						</div>
						<div className={styles.button__container}>
							<span style={{ marginRight: '20px' }}>4.</span>
							<span>Выберете следующий товар, или заберите сдачу</span>
						</div>
						<div className={styles.button__container}>
							<span style={{ marginRight: '20px' }}>5.</span>
							<Button onClick={openModalPickUpChange} text={'Заберите сдачу'} />
						</div>
					</div>
					<div>
						<div onClick={pickupItem} className={styles.purchasedItem}>
							{itemsStore.currentItemId >= 0
								? itemsStore.items[itemsStore.currentItemId].name
								: 'Получите ваш товар здесь'}
						</div>
					</div>
				</div>
				<ModalAddCash />
				<ModalPickUpChange />
				<ModalPassword />
				<ModalPickUpMoney />
				<ModalAddMoney />
			</div>
		</div>
	);
}

export default observer(App);
