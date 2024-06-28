import { FC } from "react";
import styles from "./delete-button.module.css";
import { DeleteButtonProps } from "./types";

export const DeleteButton: FC<DeleteButtonProps> = ({ onClick }) => (
  <button className={`${styles.button}`} onClick={onClick}>
    x
  </button>
);
