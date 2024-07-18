import { LegacyRef } from "react";

export type OptionType = {
  id: number;
  name: string;
};

export type DropdownListProps = {
  isOpen: boolean;
  options: OptionType[];
};
