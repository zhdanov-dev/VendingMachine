import { observer } from 'mobx-react-lite';
import { useState } from 'react';
import { modalStore } from '../../../stores/modalStore';
import Button from '../../button/Button';
import styles from './ModalPassword.module.scss';

function ModalPassword() {

	const [password, setPassword] = useState('');
	const [alert, setAlert] = useState('');

	const changePassword = (e: any) => {
		setPassword(e.target.value);
		setAlert('');
	}

	const checkPassword = () => {
		if (password === '1234') {
			modalStore.changeModalPassword();
			setAlert('');
			setPassword('');
			modalStore.changePasswordIsCorrect();
		} else {
			setAlert('Неверный пароль.')
		}
	}

	const closeModalAddCash = () => {
		modalStore.changeModalPassword();
	};

	if (!modalStore.modalPassword) return null;

	return (
		<>
			<div onClick={closeModalAddCash} className={styles.back} />
			<div className={styles.container}>
				<span className={styles.input__text}>Введите пароль</span>
				{alert && (
					<div className={styles.alert}>{alert}</div>
				)}
				<input value={password} onChange={changePassword} className={styles.input} type="password" />
				<Button onClick={checkPassword} text={'Войти'}/>
			</div>
		</>
	);
}

export default observer(ModalPassword);

