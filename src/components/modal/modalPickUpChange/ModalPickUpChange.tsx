import { observer } from 'mobx-react-lite';
import { balanceStore } from '../../../stores/balanceStore';
import { modalStore } from '../../../stores/modalStore';
import Button from '../../button/Button';
import styles from './ModalPickUpChange.module.scss';

function ModalPickUpChange() {
	const closeModalPickUpChange = () => {
		modalStore.changeModalPickUpChange();
	};

	const pickUpChange = () => {
		if (balanceStore.noMoney) {
			balanceStore.userBalance = balanceStore.remains
		} else {
			balanceStore.resetUserBalance();
		}
		modalStore.changeModalPickUpChange();
	}

	if (!modalStore.modalPickUpChange) return null;

	return (
		<>
			<div onClick={closeModalPickUpChange} className={styles.back} />
			<div className={styles.container}>
				<span style={{ textAlign: 'center' }}>
					{balanceStore.noMoney && balanceStore.userBalance > 0
						? `К сдаче:  ${
								balanceStore.userBalance
						  }, аппарат может сдать ${balanceStore.getPossyblyChange()}.
						Заберите сдачу и возьмите товар на недостающую сумму.`
						: `К сдаче: ${balanceStore.userBalance}`}
				</span>
				<div className={styles.banknotes__container}>
					{balanceStore.change.one > 0 ? (
						<div className={styles.banknotes}>
							<span className={styles.countBanknotes}>
								{balanceStore.change.one}:
							</span>
							<div className={styles.banknote}>1</div>
						</div>
					) : null}
					{balanceStore.change.five > 0 ? (
						<div className={styles.banknotes}>
							<span className={styles.countBanknotes}>
								{balanceStore.change.five}:
							</span>
							<div className={styles.banknote}>5</div>
						</div>
					) : null}
					{balanceStore.change.ten > 0 ? (
						<div className={styles.banknotes}>
							<span className={styles.countBanknotes}>
								{balanceStore.change.ten}:
							</span>
							<div className={styles.banknote}>10</div>
						</div>
					) : null}
					{balanceStore.change.fifty > 0 ? (
						<div className={styles.banknotes}>
							<span className={styles.countBanknotes}>
								{balanceStore.change.fifty}:
							</span>
							<div className={styles.banknote}>50</div>
						</div>
					) : null}
					{balanceStore.change.hundred > 0 ? (
						<div className={styles.banknotes}>
							<span className={styles.countBanknotes}>
								{balanceStore.change.hundred}:
							</span>
							<div className={styles.banknote}>100</div>
						</div>
					) : null}
					{balanceStore.change.fiveHundred > 0 ? (
						<div className={styles.banknotes}>
							<span className={styles.countBanknotes}>
								{balanceStore.change.fiveHundred}:
							</span>
							<div className={styles.banknote}>500</div>
						</div>
					) : null}
				</div>
				<Button onClick={pickUpChange} text={'Забрать'} />
			</div>
		</>
	);
}

export default observer(ModalPickUpChange);
