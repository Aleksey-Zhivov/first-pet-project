import { FC, MouseEvent, useEffect, useState } from 'react';
import { cities } from 'src/someData/cities';
import { Input } from './input';
import { DropdownList } from './dropdown-list';
import { Label } from './label';
import { DeleteButton } from './delete-button';

export const Dropdown: FC = () => {
	const list = document.getElementById('list');

	const [isOpen, setOpen] = useState(false);
	const [selected, setSelected] = useState(false);
	const [inputValue, setInputValue] = useState('');

	const handleOpen = () => setOpen(!isOpen);
	const setInputText = (e: MouseEvent<HTMLLIElement>) => {
		const item = e.target as HTMLLIElement;
		if (item !== e.currentTarget && item) {
			setInputValue(item.outerText);
		} else if (e.target !== list) {
			setOpen(false);
		}
	};

	const handleSelected = () => setSelected(!selected);

	useEffect(() => {
		list?.addEventListener('mouseup', (e) => setInputText(e));
		return list?.removeEventListener('mouseup', (e): void => setInputText(e));
	}, [list]);

	useEffect(() => {
		document.addEventListener('mouseup', (e) => {
			if (isOpen && e.target !== list) {
				setOpen(!isOpen);
			}
		});
		document.addEventListener('keydown', (e: KeyboardEvent) => {
			if (isOpen && e.key === 'Escape') {
				setOpen(!isOpen);
			}
		});
	}, [isOpen]);

	return (
		<>
			<Label title='Выберите город'></Label>
			<Input onClick={handleOpen} value={inputValue} />
			<DeleteButton onClick={() => setInputValue('')}></DeleteButton>
			<DropdownList
				isOpen={isOpen}
				options={cities}
				selected={false}
				onSelect={handleSelected}></DropdownList>
		</>
	);
};
