import { FC, memo } from "react";

import styles from "./modal.module.css";

import { CloseIcon } from "@zlden/react-developer-burger-ui-components";
import { TModalUIProps } from "./type";
import { ModalOverlayUI } from "../modal-overlay";

export const ModalUI: FC<TModalUIProps> = memo(
  ({ title, onClose, children }) => (
    <>
      <div className={styles.modal}>
        <div className={styles.header}>
          <h3 className={`${styles.title}`}>{title}</h3>
          <button className={styles.button} type="button" onClick={onClose}>
            <CloseIcon className={`${styles.icon}`} type="primary" />
          </button>
        </div>
        <div className={styles.content}>{children}</div>
      </div>
      <ModalOverlayUI onClick={onClose} />
    </>
  ),
);
