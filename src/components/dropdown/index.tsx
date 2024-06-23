import { MouseEvent, SyntheticEvent, useEffect, useState } from 'react';
import { cities } from 'src/someData/cities';
import { Input } from './input';
import { DropdownList } from './dropdown-list';
import { Label } from './label';
import { DeleteButton } from './delete-button';
import styles from './style.module.scss';

export const Dropdown = () => {
	const list = document.getElementById('list');

	const [isOpen, setOpen] = useState(false);
	const [inputValue, setInputValue] = useState('');
	const [options, setOptions] = useState(cities);

	const handleOpen = () => setOpen(!isOpen);
	const setInputText = (e: MouseEvent) => {
		const item = e.target as HTMLLIElement;
		if (item !== e.currentTarget && item) {
			setInputValue(item.outerText);
		} else if (e.target !== list) {
			setOpen(false);
		}
	};

	const handleOpenByOputsideClick = (e: MouseEvent) => {
		if (isOpen && e.target !== list) {
			setOpen(!isOpen);
		}
	};

	const handleOpenByEscapePress = (e: KeyboardEvent) => {
		if (isOpen && e.key === 'Escape') {
			setOpen(!isOpen);
		}
	};

	const handleInputFilter = (text: string) => {
		setOptions(
			options.filter((option) =>
				option.name.toLowerCase().includes(text.toLowerCase())
			)
		);
	};

	const handleChange = (e: SyntheticEvent) => {
		const input = e.target as HTMLInputElement;
		setInputValue(input.value);
	};

	useEffect(() => {
		document.addEventListener('keyup', (e) => {
			const input = e.target as HTMLInputElement;
			handleInputFilter(input.value);
		});
		document.removeEventListener('keyup', (e) => {
			const input = e.target as HTMLInputElement;
			handleInputFilter(input.value);
		});
	}, [Input]);

	useEffect(() => {
		list?.addEventListener('mouseup', (e) => setInputText(e));
		return list?.removeEventListener('mouseup', (e): void => setInputText(e));
	}, [list]);

	useEffect(() => {
		document.addEventListener('mouseup', (e) => handleOpenByOputsideClick(e));
		return document.removeEventListener('mouseup', (e) =>
			handleOpenByOputsideClick(e)
		);
	}, [isOpen]);

	useEffect(() => {
		document.addEventListener('keydown', (e) => handleOpenByEscapePress(e));
		return document.removeEventListener('keydown', (e) =>
			handleOpenByEscapePress(e)
		);
	}, [isOpen]);

	return (
		<>
			<Label title='Выберите город'></Label>
			<Input value={inputValue} onClick={handleOpen} onChange={handleChange} />
			<DeleteButton
				onClick={() => {
					setInputValue('');
				}}></DeleteButton>
			{options.length !== 0 ? (
				<DropdownList isOpen={isOpen} options={options}></DropdownList>
			) : isOpen ? (
				<span className={`${styles.error}`}>Совпадений не найдено</span>
			) : null}
		</>
	);
};
