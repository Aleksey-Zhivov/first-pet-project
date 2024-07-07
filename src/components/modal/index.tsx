import { FC, useEffect } from "react";
import { ModalProps } from "./type";
import { createPortal } from "react-dom";

export const Modal: FC<ModalProps> = ({
  title,
  //   children,
  onClose,
  onClick,
}) => {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    document.addEventListener("keyup", handleEsc);
    return document.removeEventListener("keyup", handleEsc);
  }, [onClose]);

  return <></>;
};
