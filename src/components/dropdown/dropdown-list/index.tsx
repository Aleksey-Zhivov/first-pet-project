import { FC } from 'react';
import { DropdownListProps } from './types';
import styles from './style.module.scss';

export const DropdownList: FC<DropdownListProps> = ({ isOpen, options }) => {
	return (
		<ul
			className={isOpen ? `${styles.list_active}` : `${styles.list}`}
			id='list'>
			{isOpen &&
				options.map((option) => {
					return (
						<li className={`${styles.item}`} key={option.name}>
							{option.name}
						</li>
					);
				})}
		</ul>
	);
};
