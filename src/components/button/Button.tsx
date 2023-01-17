import { observer } from 'mobx-react-lite';
import styles from './Button.module.scss';

interface ButtonProps {
	text: String;
	onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

function Button({text, onClick}: ButtonProps) {
	return (
		<button onClick={onClick} className={styles.container}>{text}</button>
	);
}

export default observer(Button);
