import { FC } from "react";
import styles from "./style.module.css";
import { InputProps } from "./types";

export const Input: FC<InputProps> = ({ onClick, value, onChange }) => (
  <input
    type="text"
    className={`${styles.input}`}
    name="input"
    onClick={onClick}
    value={value}
    onChange={onChange}
  />
);
