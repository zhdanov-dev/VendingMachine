import { observer } from 'mobx-react-lite';
import { balanceStore } from '../../../stores/balanceStore';
import { banknotesStore } from '../../../stores/banknotesStore';
import { modalStore } from '../../../stores/modalStore';
import Button from '../../button/Button';
import styles from './ModalAddCash.module.scss';

function ModalAddCash() {
	const closeModalAddCash = () => {
		modalStore.changeModalAddCash();
	};

	const addCashToBalance = (banknote: any) => {
		balanceStore.addUserBalance(banknote);
		modalStore.changeModalAddCash();
	};

	if (!modalStore.modalAddCash) return null;

	return (
		<>
			<div onClick={closeModalAddCash} className={styles.back} />
			<div className={styles.container}>
				<span>Выберете номинал купюры, которую хотите внести</span>
				<div className={styles.buttons__container}>
					{banknotesStore.banknotes.map((banknote: string, key: number) => {
						return (
							<Button
								onClick={() => addCashToBalance(banknote)}
								text={banknote}
								key={key}
							/>
						);
					})}
				</div>
			</div>
		</>
	);
}

export default observer(ModalAddCash);
