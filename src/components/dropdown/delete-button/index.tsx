import { FC } from 'react';
import styles from './style.module.scss';
import { DeleteButtonProps } from './types';

export const DeleteButton: FC<DeleteButtonProps> = ({ onClick }) => {
	return (
		<button className={`${styles.button}`} onClick={onClick}>
			Очистить содержимое
		</button>
	);
};
