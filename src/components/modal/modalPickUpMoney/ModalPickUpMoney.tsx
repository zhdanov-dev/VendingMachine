import { observer } from 'mobx-react-lite';
import { balanceStore } from '../../../stores/balanceStore';
import { modalStore } from '../../../stores/modalStore';
import Button from '../../button/Button';
import styles from './ModalPickUpMoney.module.scss';

function ModalPickUpMoney() {
	const closeModalPickUpMoney = () => {
		modalStore.changeModalPickUpMoney();
	};

	const pickUpMoney = () => {
		balanceStore.resetBankBalance();
		modalStore.changeModalPickUpMoney();
	}

	if (!modalStore.modalPickUpMoney) return null;

	return (
		<>
			<div onClick={closeModalPickUpMoney} className={styles.back} />
			<div className={styles.container}>
				<span style={{ textAlign: 'center' }}>
					Баланс аппарата: {balanceStore.checkBankBalance()}
				</span>
				<div className={styles.banknotes__container}>
					{balanceStore.bankBalance.one > 0 ? (
						<div className={styles.banknotes}>
							<span className={styles.countBanknotes}>
								{balanceStore.bankBalance.one}:
							</span>
							<div className={styles.banknote}>1</div>
						</div>
					) : null}
					{balanceStore.bankBalance.five > 0 ? (
						<div className={styles.banknotes}>
							<span className={styles.countBanknotes}>
								{balanceStore.bankBalance.five}:
							</span>
							<div className={styles.banknote}>5</div>
						</div>
					) : null}
					{balanceStore.bankBalance.ten > 0 ? (
						<div className={styles.banknotes}>
							<span className={styles.countBanknotes}>
								{balanceStore.bankBalance.ten}:
							</span>
							<div className={styles.banknote}>10</div>
						</div>
					) : null}
					{balanceStore.bankBalance.fifty > 0 ? (
						<div className={styles.banknotes}>
							<span className={styles.countBanknotes}>
								{balanceStore.bankBalance.fifty}:
							</span>
							<div className={styles.banknote}>50</div>
						</div>
					) : null}
					{balanceStore.bankBalance.hundred > 0 ? (
						<div className={styles.banknotes}>
							<span className={styles.countBanknotes}>
								{balanceStore.bankBalance.hundred}:
							</span>
							<div className={styles.banknote}>100</div>
						</div>
					) : null}
					{balanceStore.bankBalance.fiveHundred > 0 ? (
						<div className={styles.banknotes}>
							<span className={styles.countBanknotes}>
								{balanceStore.bankBalance.fiveHundred}:
							</span>
							<div className={styles.banknote}>500</div>
						</div>
					) : null}
					{balanceStore.bankBalance.thousand > 0 ? (
						<div className={styles.banknotes}>
							<span className={styles.countBanknotes}>
								{balanceStore.bankBalance.thousand}:
							</span>
							<div className={styles.banknote}>1000</div>
						</div>
					) : null}
				</div>
				<Button onClick={pickUpMoney} text={'Забрать'} />
			</div>
		</>
	);
}

export default observer(ModalPickUpMoney);
