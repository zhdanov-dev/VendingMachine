import { observer } from 'mobx-react-lite';
import { balanceStore } from '../../../stores/balanceStore';
import { modalStore } from '../../../stores/modalStore';
import Button from '../../button/Button';
import styles from './ModalAddMoney.module.scss';

function ModalAddMoney() {

	const closeModalAddMoney = () => {
		modalStore.changeModalAddMoney();
	};

	if (!modalStore.modalAddMoney) return null;

	return (
		<>
			<div onClick={closeModalAddMoney} className={styles.back} />
			<div className={styles.container}>
				<span style={{ textAlign: 'center' }}>Внести купюры.</span>
				<div className={styles.banknotes__container}>
					<div className={styles.banknotes}>
						<span className={styles.countBanknotes}>1:</span>
						<input
							value={balanceStore.bankBalance.one}
							onChange={e =>
								isNaN(Number(e.target.value))
									? null
									: balanceStore.changeBankBalanceOne(Number(e.target.value))
							}
							className={styles.inputMoney}
							type='text'
						/>
					</div>
					<div className={styles.banknotes}>
						<span className={styles.countBanknotes}>5:</span>
						<input
							value={balanceStore.bankBalance.five}
							onChange={e =>
								isNaN(Number(e.target.value))
									? null
									: balanceStore.changeBankBalanceFive(Number(e.target.value))
							}
							className={styles.inputMoney}
							type='text'
						/>
					</div>
					<div className={styles.banknotes}>
						<span className={styles.countBanknotes}>10:</span>
						<input
							value={balanceStore.bankBalance.ten}
							onChange={e =>
								isNaN(Number(e.target.value))
									? null
									: balanceStore.changeBankBalanceTen(Number(e.target.value))
							}
							className={styles.inputMoney}
							type='text'
						/>
					</div>
					<div className={styles.banknotes}>
						<span className={styles.countBanknotes}>50:</span>
						<input
							value={balanceStore.bankBalance.fifty}
							onChange={e =>
								isNaN(Number(e.target.value))
									? null
									: balanceStore.changeBankBalanceFifty(Number(e.target.value))
							}
							className={styles.inputMoney}
							type='text'
						/>
					</div>
					<div className={styles.banknotes}>
						<span className={styles.countBanknotes}>100:</span>
						<input
							value={balanceStore.bankBalance.hundred}
							onChange={e =>
								isNaN(Number(e.target.value))
									? null
									: balanceStore.changeBankBalanceHundred(
											Number(e.target.value)
									  )
							}
							className={styles.inputMoney}
							type='text'
						/>
					</div>
					<div className={styles.banknotes}>
						<span className={styles.countBanknotes}>500:</span>
						<input
							value={balanceStore.bankBalance.fiveHundred}
							onChange={e =>
								isNaN(Number(e.target.value))
									? null
									: balanceStore.changeBankBalanceFiveHundred(
											Number(e.target.value)
									  )
							}
							className={styles.inputMoney}
							type='text'
						/>
					</div>
					<div className={styles.banknotes}>
						<span className={styles.countBanknotes}>1000:</span>
						<input
							value={balanceStore.bankBalance.thousand}
							onChange={e =>
								isNaN(Number(e.target.value))
									? null
									: balanceStore.changeBankBalanceThousand(
											Number(e.target.value)
									  )
							}
							className={styles.inputMoney}
							type='text'
						/>
					</div>
				</div>
				<Button onClick={closeModalAddMoney} text={'Внести'} />
			</div>
		</>
	);
}

export default observer(ModalAddMoney);
