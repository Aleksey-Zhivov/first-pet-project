import { FC } from "react";
import { DropdownListProps } from "./types";
import styles from "./dropdown-list.module.css";

export const DropdownList: FC<DropdownListProps> = ({ isOpen, options }) => (
  <ul className={isOpen ? `${styles.list_active}` : `${styles.list}`} id="list">
    {isOpen &&
      options.map((option) => (
        <li className={`${styles.item}`} key={option.id}>
          {option.name}
        </li>
      ))}
  </ul>
);
