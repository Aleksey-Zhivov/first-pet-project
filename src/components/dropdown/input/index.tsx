import { FC } from 'react';
import styles from './style.module.scss';
import { InputProps } from './types';

export const Input: FC<InputProps> = ({ onClick, value }) => {
	return (
		<input
			type='text'
			className={`${styles.input}`}
			name='input'
			onClick={onClick}
			value={value}
		/>
	);
};
