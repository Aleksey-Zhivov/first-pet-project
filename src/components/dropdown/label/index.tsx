import { FC } from 'react';
import styles from './style.module.scss';
import { LabelProps } from './types';

export const Label: FC<LabelProps> = ({ title }) => {
	return <label className={`${styles.title}`}>{title}</label>;
};
