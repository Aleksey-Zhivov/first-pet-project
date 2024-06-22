export type OptionType = {
	name: string;
};

export type DropdownListProps = {
	isOpen: boolean;
	options: OptionType[];
	onSelect: (name: string) => void;
	selected?: boolean;
};
