import { FC } from 'react';
import styles from './style.module.css';
import { LabelProps } from './types';

export const Label: FC<LabelProps> = ({ title }) => <label className={`${styles.title}`}>{title}</label>;
