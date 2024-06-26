import { FC } from 'react';
import styles from './style.module.css';
import { DeleteButtonProps } from './types';

export const DeleteButton: FC<DeleteButtonProps> = ({ onClick }) => (
		<button className={`${styles.button}`} onClick={onClick}>
			Очистить содержимое
		</button>
	);
